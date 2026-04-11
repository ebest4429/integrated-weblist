import { GROUPS } from '../data/categories'
import SidebarGroup from './SidebarGroup'

export default function Sidebar({ width, selectedId, onSelect, favCount, onResizeStart }) {
  return (
    <aside style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      flexShrink: 0,
      width,
      height: '100%',
      background: '#252526',
      borderRight: '1px solid #404042',
    }}>
      {/* 스크롤은 nav에만 */}
      <nav style={{ flex: 1, overflowY: 'auto', scrollbarWidth: 'none', padding: '8px 0' }}>
        <style>{`nav::-webkit-scrollbar{display:none}`}</style>

        {/* 즐겨찾기 */}
        <button
          onClick={() => onSelect('__favorites__')}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
            padding: '10px 20px', background: selectedId === '__favorites__' ? 'rgba(59,130,246,0.2)' : 'transparent',
            color: '#ffffff', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '15px',
            borderLeft: selectedId === '__favorites__' ? '2px solid #3b82f6' : '2px solid transparent',
          }}
          onMouseEnter={e => { if (selectedId !== '__favorites__') e.currentTarget.style.background = '#2e2e2f' }}
          onMouseLeave={e => { if (selectedId !== '__favorites__') e.currentTarget.style.background = 'transparent' }}
        >
          <span style={{ fontSize: '16px' }}>⭐</span>
          <span style={{ flex: 1 }}>즐겨찾기</span>
          {favCount > 0 && (
            <span style={{ fontSize: '12px', background: 'rgba(234,179,8,0.2)', color: '#fbbf24', padding: '2px 8px', borderRadius: '999px' }}>
              {favCount}
            </span>
          )}
        </button>

        {GROUPS.map(group => (
          <SidebarGroup key={group.id} group={group} selectedId={selectedId} onSelect={onSelect} />
        ))}

        {/* 도구별 보기 */}
        <div style={{ marginTop: '4px' }}>
          <div style={{ height: '1px', background: '#404042', margin: '8px 12px' }} />
          <div style={{ padding: '6px 20px 4px', fontSize: '11px', color: '#666668', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: '600' }}>
            도구별 보기
          </div>
          {[
            { id: '__mcp__', icon: '🔌', label: 'MCP 연결' },
            { id: '__cli__', icon: '💻', label: 'CLI 도구' },
          ].map(({ id, icon, label }) => (
            <button
              key={id}
              onClick={() => onSelect(id)}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 20px',
                background: selectedId === id ? 'rgba(59,130,246,0.2)' : 'transparent',
                color: '#ffffff', border: 'none', cursor: 'pointer', textAlign: 'left', fontSize: '15px',
                borderLeft: selectedId === id ? '2px solid #3b82f6' : '2px solid transparent',
              }}
              onMouseEnter={e => { if (selectedId !== id) e.currentTarget.style.background = '#2e2e2f' }}
              onMouseLeave={e => { if (selectedId !== id) e.currentTarget.style.background = 'transparent' }}
            >
              <span style={{ fontSize: '16px' }}>{icon}</span>
              <span style={{ flex: 1 }}>{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* 리사이즈 핸들 */}
      <div className="resize-handle" onMouseDown={onResizeStart} />
    </aside>
  )
}
