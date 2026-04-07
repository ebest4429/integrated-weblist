import { useState, useRef, useCallback } from 'react'
import { ALL_CATEGORIES, GROUPS } from './data/categories'
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
    return parseInt(localStorage.getItem(SIDEBAR_KEY)) || 300
  })

  const isSearching = searchQuery.trim().length > 0
  const isFavorites = selectedId === '__favorites__'

  let displayItems = []
  let displayTitle = ''
  let displayIcon = ''
  let displayGroup = ''

  if (isSearching) {
    const q = searchQuery.toLowerCase()
    ALL_CATEGORIES.forEach(cat => {
      cat.items.forEach(item => {
        if (
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          (item.nameKo && item.nameKo.toLowerCase().includes(q))
        ) displayItems.push(item)
      })
    })
    displayTitle = `"${searchQuery}" 검색 결과`
    displayIcon = '🔎'
    displayGroup = ''
  } else if (isFavorites) {
    ALL_CATEGORIES.forEach(cat => {
      cat.items.forEach(item => {
        if (favorites.includes(item.name)) displayItems.push(item)
      })
    })
    displayTitle = '즐겨찾기'
    displayIcon = '⭐'
    displayGroup = ''
  } else {
    const cat = ALL_CATEGORIES.find(c => c.id === selectedId)
    if (cat) {
      displayItems = cat.items
      displayTitle = cat.title
      displayIcon = cat.icon
      const group = GROUPS.find(g => g.categories.some(c => c.id === selectedId))
      displayGroup = group ? `${group.icon} ${group.label}` : ''
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
      const w = Math.min(480, Math.max(200, e.clientX))
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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#2b2b2c', color: '#ffffff', fontFamily: 'Pretendard, -apple-system, sans-serif' }}>

      {/* ═══ 상단 타이틀 바 (2줄, sticky) ═══ */}
      <header style={{ flexShrink: 0, background: '#1e1e1f', borderBottom: '1px solid #404042', zIndex: 50 }}>
        {/* 1줄: 사이트명(좌) + 그룹·섹션(중앙) */}
        <div style={{ display: 'flex', alignItems: 'center', height: '52px', padding: '0 28px' }}>
          {/* 좌: 사이트 타이틀 */}
          <div style={{ minWidth: '240px', fontSize: '17px', fontWeight: '700', color: '#ffffff', whiteSpace: 'nowrap' }}>
            🌐 통합 웹 리소스 허브
          </div>
          {/* 중앙: 그룹 + 섹션명 나란히 */}
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            {displayGroup && (
              <>
                <span style={{ fontSize: '16px', color: '#aaaaaa', fontWeight: '500' }}>{displayGroup}</span>
                <span style={{ color: '#555558', fontSize: '18px', lineHeight: 1 }}>·</span>
              </>
            )}
            <span style={{ fontSize: '17px', fontWeight: '700', color: '#ffffff' }}>
              {displayIcon} {displayTitle}
            </span>
            <span style={{ fontSize: '14px', color: '#888888', marginLeft: '2px' }}>({displayItems.length})</span>
          </div>
          {/* 우: 여백 맞춤 */}
          <div style={{ minWidth: '240px' }} />
        </div>

        {/* 2줄: 검색바 중앙 */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0 28px 14px' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '560px' }}>
            <span style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: '#888888', fontSize: '15px', pointerEvents: 'none' }}>🔍</span>
            <input
              type="text"
              placeholder="서비스 검색... (영문·한글 모두 가능)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                paddingLeft: '42px',
                paddingRight: searchQuery ? '38px' : '16px',
                paddingTop: '9px',
                paddingBottom: '9px',
                fontSize: '15px',
                background: '#333334',
                border: '1px solid #555558',
                borderRadius: '10px',
                color: '#ffffff',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = '#3b82f6'}
              onBlur={e => e.target.style.borderColor = '#555558'}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: '#888888', fontSize: '13px', background: 'none', border: 'none', cursor: 'pointer' }}
              >✕</button>
            )}
          </div>
        </div>
      </header>

      {/* ═══ 사이드바 + 메인 ═══ */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar
          width={sidebarWidth}
          selectedId={selectedId}
          onSelect={(id) => { setSelectedId(id); setSearchQuery('') }}
          favCount={favorites.length}
          onResizeStart={handleResizeStart}
        />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          <ItemList
            items={displayItems}
            favorites={favorites}
            onToggleFav={toggleFav}
          />
        </main>
      </div>
    </div>
  )
}
