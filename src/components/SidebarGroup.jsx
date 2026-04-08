import { useState } from 'react'

export default function SidebarGroup({ group, selectedId, onSelect }) {
  const isActive = group.categories.some(c => c.id === selectedId)
  const [open, setOpen] = useState(true)

  return (
    <div style={{ marginTop: '4px' }}>
      {/* 그룹 헤더 */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 20px',
          background: 'transparent',
          color: isActive ? '#60a5fa' : '#aaaaaa',
          border: 'none',
          cursor: 'pointer',
          fontSize: '12px',
          fontWeight: '700',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          textAlign: 'left',
        }}
        onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = '#ffffff' }}
        onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = '#aaaaaa' }}
      >
        <span style={{ fontSize: '15px' }}>{group.icon}</span>
        <span style={{ flex: 1 }}>{group.label}</span>
        <span style={{ color: '#555558', fontSize: '11px' }}>{open ? '▾' : '▸'}</span>
      </button>

      {/* 카테고리 목록 */}
      {open && group.categories.map(cat => {
        const active = selectedId === cat.id
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              paddingLeft: '32px',
              paddingRight: '16px',
              paddingTop: '9px',
              paddingBottom: '9px',
              background: active ? 'rgba(59,130,246,0.2)' : 'transparent',
              color: active ? '#ffffff' : '#cccccc',
              border: 'none',
              borderLeft: active ? '2px solid #3b82f6' : '2px solid transparent',
              cursor: 'pointer',
              textAlign: 'left',
              fontSize: '14px',
            }}
            onMouseEnter={e => { if (!active) { e.currentTarget.style.background = '#2e2e2f'; e.currentTarget.style.color = '#ffffff' } }}
            onMouseLeave={e => { if (!active) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#cccccc' } }}
          >
            <span style={{ fontSize: '17px', lineHeight: 1 }}>{cat.icon}</span>
            <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{cat.title}</span>
            <span style={{ fontSize: '12px', color: '#888888' }}>{cat.itemCount}</span>
          </button>
        )
      })}
    </div>
  )
}
