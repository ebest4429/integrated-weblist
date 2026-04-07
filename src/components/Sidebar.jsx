import { GROUPS } from '../data/categories'
import SidebarGroup from './SidebarGroup'

export default function Sidebar({ width, selectedId, onSelect, searchQuery, onSearch, favCount, onResizeStart }) {
  return (
    <aside
      className="relative flex flex-col h-full bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex-shrink-0"
      style={{ width }}
    >
      {/* 헤더 */}
      <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <h1 className="font-bold text-gray-900 dark:text-white leading-tight">
          🌐 통합 웹 리소스 허브
        </h1>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">
          AI·개발·마케팅·크리에이티브
        </p>
      </div>

      {/* 검색 */}
      <div className="px-3 py-2 border-b border-gray-200 dark:border-gray-700">
        <input
          type="text"
          placeholder="🔍  서비스 검색..."
          value={searchQuery}
          onChange={e => onSearch(e.target.value)}
          className="w-full px-3 py-1.5 text-xs bg-gray-100 dark:bg-gray-700 rounded-md outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 placeholder-gray-400"
        />
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 overflow-y-auto py-1">
        {/* 즐겨찾기 */}
        <button
          onClick={() => onSelect('__favorites__')}
          className={`w-full flex items-center gap-2 px-4 py-1.5 text-left transition-colors ${
            selectedId === '__favorites__'
              ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
          }`}
        >
          <span>⭐</span>
          <span className="flex-1 text-xs">즐겨찾기</span>
          {favCount > 0 && (
            <span className="text-xs bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 px-1.5 py-0.5 rounded-full">
              {favCount}
            </span>
          )}
        </button>

        {/* 그룹 */}
        {GROUPS.map(group => (
          <SidebarGroup
            key={group.id}
            group={group}
            selectedId={selectedId}
            onSelect={onSelect}
          />
        ))}
      </nav>

      {/* 리사이즈 핸들 */}
      <div className="resize-handle" onMouseDown={onResizeStart} />
    </aside>
  )
}
