import { useState } from 'react'

export default function SidebarGroup({ group, selectedId, onSelect }) {
  const isActive = group.categories.some(c => c.id === selectedId)
  const [open, setOpen] = useState(true)

  return (
    <div className="mt-1">
      <button
        onClick={() => setOpen(o => !o)}
        className={`w-full flex items-center gap-2 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide transition-colors hover:text-gray-700 dark:hover:text-gray-300 ${
          isActive ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'
        }`}
      >
        <span>{group.icon}</span>
        <span className="flex-1 text-left">{group.label}</span>
        <span className="text-gray-300 dark:text-gray-600">{open ? '▾' : '▸'}</span>
      </button>

      {open && (
        <div>
          {group.categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => onSelect(cat.id)}
              className={`w-full flex items-center gap-2 pl-7 pr-3 py-1.5 text-sm text-left transition-colors ${
                selectedId === cat.id
                  ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 font-medium'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
              }`}
            >
              <span className="text-base leading-none">{cat.icon}</span>
              <span className="flex-1 truncate text-xs">{cat.title}</span>
              <span className="text-xs text-gray-300 dark:text-gray-600">{cat.items.length}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
