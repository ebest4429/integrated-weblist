import { useState } from 'react'

const BADGE = {
  free:     { label: '무료',      cls: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  paid:     { label: '유료',      cls: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
  freepaid: { label: '무료+유료', cls: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
  open:     { label: '오픈소스',  cls: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
  exp:      { label: '실험적',    cls: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
  dep:      { label: 'Deprecated', cls: 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500' },
}

export default function ItemRow({ item, isFav, onToggleFav }) {
  const [open, setOpen] = useState(false)
  const badge = BADGE[item.badge] || BADGE.free

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* 행 */}
      <div
        className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer select-none"
        onClick={() => setOpen(o => !o)}
      >
        <span className="text-gray-300 dark:text-gray-600 text-xs w-3 flex-shrink-0">
          {open ? '▾' : '▸'}
        </span>

        {/* 서비스명 */}
        <span className="font-semibold text-gray-900 dark:text-white w-40 flex-shrink-0 truncate">
          {item.name}
        </span>

        {/* 뱃지 */}
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${badge.cls}`}>
          {badge.label}
        </span>

        {/* 설명 */}
        <span className="text-gray-500 dark:text-gray-400 flex-1 min-w-0 truncate">
          {item.desc}
        </span>

        {/* 액션 */}
        <div className="flex items-center gap-2 flex-shrink-0" onClick={e => e.stopPropagation()}>
          <button
            onClick={onToggleFav}
            className={`transition-colors text-base leading-none ${
              isFav ? 'text-yellow-400' : 'text-gray-200 dark:text-gray-600 hover:text-yellow-400'
            }`}
            title={isFav ? '즐겨찾기 해제' : '즐겨찾기 추가'}
          >
            ⭐
          </button>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors whitespace-nowrap"
          >
            바로가기 →
          </a>
        </div>
      </div>

      {/* 펼침 상세 */}
      {open && (
        <div className="px-10 py-3 bg-gray-50 dark:bg-gray-850 border-t border-gray-100 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{item.desc}</p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-blue-500 hover:text-blue-600 hover:underline break-all"
          >
            {item.url}
          </a>
        </div>
      )}
    </div>
  )
}
