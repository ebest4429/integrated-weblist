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
      </nav>

      {/* 리사이즈 핸들 */}
      <div className="resize-handle" onMouseDown={onResizeStart} />
    </aside>
  )
}
