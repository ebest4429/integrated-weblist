import { useState, useRef, useCallback } from 'react'
import { ALL_CATEGORIES } from './data/categories'
import Sidebar from './components/Sidebar'
import ItemList from './components/ItemList'

const SIDEBAR_KEY = 'weblist-sidebar-width'
const FAV_KEY = 'weblist-favorites'

export default function App() {
  const [selectedId, setSelectedId] = useState('ai-platforms')
  const [searchQuery, setSearchQuery] = useState('')
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || [] } catch { return [] }
  })
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    return parseInt(localStorage.getItem(SIDEBAR_KEY)) || 260
  })

  const isSearching = searchQuery.trim().length > 0
  const isFavorites = selectedId === '__favorites__'

  let displayItems = []
  let displayTitle = ''
  let displayIcon = ''

  if (isSearching) {
    const q = searchQuery.toLowerCase()
    ALL_CATEGORIES.forEach(cat => {
      cat.items.forEach(item => {
        if (item.name.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)) {
          displayItems.push(item)
        }
      })
    })
    displayTitle = `"${searchQuery}" 검색 결과`
    displayIcon = '🔎'
  } else if (isFavorites) {
    ALL_CATEGORIES.forEach(cat => {
      cat.items.forEach(item => {
        if (favorites.includes(item.name)) displayItems.push(item)
      })
    })
    displayTitle = '즐겨찾기'
    displayIcon = '⭐'
  } else {
    const cat = ALL_CATEGORIES.find(c => c.id === selectedId)
    if (cat) {
      displayItems = cat.items
      displayTitle = cat.title
      displayIcon = cat.icon
    }
  }

  const toggleFav = (name) => {
    setFavorites(prev => {
      const next = prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
      localStorage.setItem(FAV_KEY, JSON.stringify(next))
      return next
    })
  }

  const isResizing = useRef(false)
  const handleResizeStart = useCallback(() => {
    isResizing.current = true
    const onMove = (e) => {
      if (!isResizing.current) return
      const w = Math.min(400, Math.max(180, e.clientX))
      setSidebarWidth(w)
      localStorage.setItem(SIDEBAR_KEY, w)
    }
    const onUp = () => {
      isResizing.current = false
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
    }
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }, [])

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 text-sm">
      <Sidebar
        width={sidebarWidth}
        selectedId={selectedId}
        onSelect={(id) => { setSelectedId(id); setSearchQuery('') }}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        favCount={favorites.length}
        onResizeStart={handleResizeStart}
      />
      <main className="flex-1 overflow-y-auto">
        <ItemList
          icon={displayIcon}
          title={displayTitle}
          items={displayItems}
          favorites={favorites}
          onToggleFav={toggleFav}
        />
      </main>
    </div>
  )
}
