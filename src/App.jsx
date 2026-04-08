import { useState, useEffect, useRef, useCallback } from 'react'
import { CATEGORY_META, GROUPS, DATA_LOADERS } from './data/categories'
import Sidebar from './components/Sidebar'
import ItemList from './components/ItemList'
import FilterBar from './components/FilterBar'

const SIDEBAR_KEY = 'weblist-sidebar-width'
const FAV_KEY = 'weblist-favorites'
const BADGE_FILTER_KEY = 'weblist-badge-filter'
const GROUP_FILTER_KEY = 'weblist-group-filter'

// 카테고리 → 그룹 매핑 (메타데이터에서 도출)
const CAT_TO_GROUP = Object.fromEntries(CATEGORY_META.map(m => [m.id, m.groupId]))

const TOTAL_COUNT = CATEGORY_META.reduce((sum, m) => sum + m.itemCount, 0)

function getUrlParams() {
  return new URLSearchParams(window.location.search)
}

export default function App() {
  const [selectedId, setSelectedId] = useState('ai-platforms')
  const [searchQuery, setSearchQuery] = useState(() => getUrlParams().get('q') || '')
  const [favorites, setFavorites] = useState(() => {
    try { return JSON.parse(localStorage.getItem(FAV_KEY)) || [] } catch { return [] }
  })
  const [sidebarWidth, setSidebarWidth] = useState(() => {
    return parseInt(localStorage.getItem(SIDEBAR_KEY)) || 300
  })
  const [badgeFilter, setBadgeFilter] = useState(() => {
    const url = getUrlParams().get('badge')
    if (url) return url.split(',').filter(Boolean)
    try { return JSON.parse(localStorage.getItem(BADGE_FILTER_KEY)) || [] } catch { return [] }
  })
  const [groupFilter, setGroupFilter] = useState(() => {
    const url = getUrlParams().get('group')
    if (url) return url.split(',').filter(Boolean)
    try { return JSON.parse(localStorage.getItem(GROUP_FILTER_KEY)) || [] } catch { return [] }
  })

  // ─── 동적 로딩 캐시 (P3-6) ────────────────────────────────────────
  // catCache: { [catId]: items[] } — 한 번 로드된 카테고리는 재요청 없음
  const [catCache, setCatCache] = useState({})
  const [loadingCat, setLoadingCat] = useState(false)
  const loadingAllRef = useRef(false) // 검색용 전체 로드 진행 중 플래그

  const loadCat = useCallback(async (id) => {
    if (!DATA_LOADERS[id]) return
    setLoadingCat(true)
    const mod = await DATA_LOADERS[id]()
    setCatCache(prev => ({ ...prev, [id]: mod.default.items }))
    setLoadingCat(false)
  }, [])

  const loadAll = useCallback(async () => {
    if (loadingAllRef.current) return
    loadingAllRef.current = true
    const missing = CATEGORY_META.filter(m => !catCache[m.id]).map(m => m.id)
    if (missing.length === 0) { loadingAllRef.current = false; return }
    const results = await Promise.all(
      missing.map(async id => {
        const mod = await DATA_LOADERS[id]()
        return [id, mod.default.items]
      })
    )
    setCatCache(prev => ({ ...prev, ...Object.fromEntries(results) }))
    loadingAllRef.current = false
  }, [catCache])

  // 카테고리 선택 시 해당 JSON 로드
  useEffect(() => {
    if (selectedId !== '__favorites__' && !catCache[selectedId]) {
      loadCat(selectedId)
    }
  }, [selectedId]) // eslint-disable-line

  // 검색/즐겨찾기 모드 진입 시 전체 로드
  const isSearching = searchQuery.trim().length > 0
  const isFavorites = selectedId === '__favorites__'

  useEffect(() => {
    if (isSearching || isFavorites) loadAll()
  }, [isSearching, isFavorites]) // eslint-disable-line

  const q = searchQuery.toLowerCase().trim()

  // URL 동기화 + LocalStorage 저장 (P3-4)
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (badgeFilter.length) params.set('badge', badgeFilter.join(','))
    if (groupFilter.length) params.set('group', groupFilter.join(','))
    const str = params.toString()
    window.history.replaceState(null, '', str ? `?${str}` : window.location.pathname)
    localStorage.setItem(BADGE_FILTER_KEY, JSON.stringify(badgeFilter))
    localStorage.setItem(GROUP_FILTER_KEY, JSON.stringify(groupFilter))
  }, [searchQuery, badgeFilter, groupFilter])

  // ─── 표시 항목 계산 ───────────────────────────────────────────────
  let displayItems = []
  let displayTitle = ''
  let displayIcon = ''
  let displayGroup = ''

  if (isSearching) {
    Object.entries(catCache).forEach(([catId, items]) => {
      items.forEach(item => {
        if (
          item.name.toLowerCase().includes(q) ||
          item.desc.toLowerCase().includes(q) ||
          (item.nameKo && item.nameKo.toLowerCase().includes(q)) ||
          (item.detail?.intro && item.detail.intro.toLowerCase().includes(q)) ||
          (item.detail?.features && item.detail.features.some(f => f.toLowerCase().includes(q)))
        ) {
          displayItems.push({ ...item, _groupId: CAT_TO_GROUP[catId] })
        }
      })
    })
    displayTitle = `"${searchQuery}" 검색 결과`
    displayIcon = '🔎'
    displayGroup = ''
  } else if (isFavorites) {
    Object.entries(catCache).forEach(([catId, items]) => {
      items.forEach(item => {
        if (favorites.includes(item.name)) {
          displayItems.push({ ...item, _groupId: CAT_TO_GROUP[catId] })
        }
      })
    })
    displayTitle = '즐겨찾기'
    displayIcon = '⭐'
    displayGroup = ''
  } else {
    displayItems = catCache[selectedId] || []
    const meta = CATEGORY_META.find(m => m.id === selectedId)
    if (meta) {
      displayTitle = meta.title
      displayIcon = meta.icon
      const group = GROUPS.find(g => g.categories.some(c => c.id === selectedId))
      displayGroup = group ? `${group.icon} ${group.label}` : ''
    }
  }

  // 뱃지 필터 적용 (P3-1)
  if (badgeFilter.length > 0) {
    displayItems = displayItems.filter(item => badgeFilter.includes(item.badge || 'free'))
  }

  // 그룹 필터 적용 — 검색/즐겨찾기 모드에서만 (P3-2)
  if (groupFilter.length > 0 && (isSearching || isFavorites)) {
    displayItems = displayItems.filter(item => item._groupId && groupFilter.includes(item._groupId))
  }

  const hasActiveFilter = badgeFilter.length > 0 || groupFilter.length > 0 || isSearching

  const resetFilters = () => {
    setBadgeFilter([])
    setGroupFilter([])
    setSearchQuery('')
  }

  // ─── 이벤트 핸들러 ───────────────────────────────────────────────
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

  // ─── 렌더 ─────────────────────────────────────────────────────────
  // 현재 카테고리 로딩 중 표시용 아이템 수 (메타의 itemCount 활용)
  const currentMeta = CATEGORY_META.find(m => m.id === selectedId)
  const displayCount = loadingCat && !isSearching && !isFavorites
    ? currentMeta?.itemCount ?? 0
    : displayItems.length

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#2b2b2c', color: '#ffffff', fontFamily: 'Pretendard, -apple-system, sans-serif' }}>

      {/* ═══ 헤더 (sticky) ═══ */}
      <header style={{ flexShrink: 0, background: '#1e1e1f', borderBottom: '1px solid #404042', zIndex: 50 }}>

        {/* 1줄: 사이트명(좌) + 그룹·섹션명(중앙) */}
        <div style={{ display: 'flex', alignItems: 'center', height: '52px', padding: '0 28px' }}>
          <div style={{ minWidth: '240px', fontSize: '17px', fontWeight: '700', color: '#ffffff', whiteSpace: 'nowrap' }}>
            🌐 통합 웹 리소스 허브
          </div>
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
            <span style={{ fontSize: '14px', color: '#888888', marginLeft: '2px' }}>({displayCount})</span>
          </div>
          <div style={{ minWidth: '240px' }} />
        </div>

        {/* 2줄: 검색바 */}
        <div style={{ display: 'flex', justifyContent: 'center', padding: '0 28px 10px' }}>
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

        {/* 3줄: 필터바 (P3-1, P3-2, P3-5) */}
        <FilterBar
          badgeFilter={badgeFilter}
          setBadgeFilter={setBadgeFilter}
          groupFilter={groupFilter}
          setGroupFilter={setGroupFilter}
          totalCount={TOTAL_COUNT}
          filteredCount={displayItems.length}
          hasActiveFilter={hasActiveFilter}
          onReset={resetFilters}
        />
      </header>

      {/* ═══ 사이드바 + 메인 ═══ */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar
          width={sidebarWidth}
          selectedId={selectedId}
          onSelect={(id) => {
            setSelectedId(id)
            setSearchQuery('')
            const group = GROUPS.find(g => g.categories.some(c => c.id === id))
            if (group) setGroupFilter([group.id])
          }}
          favCount={favorites.length}
          onResizeStart={handleResizeStart}
        />
        <main style={{ flex: 1, overflowY: 'auto' }}>
          {loadingCat && !isSearching && !isFavorites ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <span style={{ fontSize: '14px', color: '#666668' }}>로딩 중...</span>
            </div>
          ) : (
            <ItemList
              items={displayItems}
              favorites={favorites}
              onToggleFav={toggleFav}
              searchQuery={q}
            />
          )}
        </main>
      </div>
    </div>
  )
}
