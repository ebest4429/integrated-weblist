const BADGES = [
  { key: 'free',     label: '무료',       color: '#4ade80', bg: 'rgba(34,197,94,0.18)',   border: 'rgba(34,197,94,0.5)' },
  { key: 'paid',     label: '유료',       color: '#fb923c', bg: 'rgba(249,115,22,0.18)',  border: 'rgba(249,115,22,0.5)' },
  { key: 'freepaid', label: '무료+유료',  color: '#60a5fa', bg: 'rgba(59,130,246,0.18)',  border: 'rgba(59,130,246,0.5)' },
  { key: 'open',     label: '오픈소스',   color: '#c084fc', bg: 'rgba(168,85,247,0.18)',  border: 'rgba(168,85,247,0.5)' },
  { key: 'exp',      label: '실험적',     color: '#fbbf24', bg: 'rgba(234,179,8,0.18)',   border: 'rgba(234,179,8,0.5)' },
  { key: 'dep',      label: 'Deprecated', color: '#cccccc', bg: 'rgba(100,100,100,0.18)', border: 'rgba(150,150,150,0.5)' },
]

const GROUP_BTNS = [
  { id: 'ai',        label: 'AI',         icon: '🤖' },
  { id: 'dev',       label: '개발',       icon: '💻' },
  { id: 'marketing', label: '마케팅',     icon: '📣' },
  { id: 'creative',  label: '크리에이티브', icon: '🎨' },
  { id: 'google',    label: '구글',       icon: '🌐' },
]

export default function FilterBar({
  badgeFilter, setBadgeFilter,
  groupFilter, setGroupFilter,
  totalCount, filteredCount,
  hasActiveFilter, onReset,
}) {
  const toggleBadge = (key) =>
    setBadgeFilter(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key])

  const toggleGroup = (id) =>
    setGroupFilter(prev => prev.includes(id) ? prev.filter(k => k !== id) : [...prev, id])

  const btnBase = {
    fontSize: '12px', fontWeight: '600',
    padding: '3px 10px', borderRadius: '999px',
    cursor: 'pointer', whiteSpace: 'nowrap',
    transition: 'all 0.12s',
    lineHeight: '18px',
  }

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '5px',
      padding: '0 28px 10px', flexWrap: 'wrap',
    }}>
      {/* 뱃지 필터 */}
      {BADGES.map(b => {
        const active = badgeFilter.includes(b.key)
        return (
          <button key={b.key} onClick={() => toggleBadge(b.key)} style={{
            ...btnBase,
            background: active ? b.bg : 'transparent',
            color: active ? b.color : '#5a5a5e',
            border: `1px solid ${active ? b.border : '#3a3a3e'}`,
          }}>{b.label}</button>
        )
      })}

      {/* 구분선 */}
      <span style={{ color: '#3a3a3e', margin: '0 3px', userSelect: 'none', fontSize: '14px' }}>│</span>

      {/* 그룹 필터 */}
      {GROUP_BTNS.map(g => {
        const active = groupFilter.includes(g.id)
        return (
          <button key={g.id} onClick={() => toggleGroup(g.id)} style={{
            ...btnBase,
            fontWeight: '500',
            background: active ? 'rgba(96,165,250,0.15)' : 'transparent',
            color: active ? '#93c5fd' : '#5a5a5e',
            border: `1px solid ${active ? 'rgba(59,130,246,0.5)' : '#3a3a3e'}`,
          }}>{g.icon} {g.label}</button>
        )
      })}

      {/* 통계 + 초기화 */}
      <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#5a5a5e', whiteSpace: 'nowrap' }}>
          전체 {totalCount}개 중 <strong style={{ color: '#d4d4d8' }}>{filteredCount}</strong>개
        </span>
        {hasActiveFilter && (
          <button onClick={onReset} style={{
            fontSize: '12px', fontWeight: '500',
            padding: '3px 10px', borderRadius: '6px',
            background: 'rgba(59,130,246,0.15)',
            color: '#93c5fd',
            border: '1px solid rgba(59,130,246,0.4)',
            cursor: 'pointer', whiteSpace: 'nowrap',
          }}>초기화 ✕</button>
        )}
      </div>
    </div>
  )
}
