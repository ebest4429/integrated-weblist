import ItemRow from './ItemRow'

export default function ItemList({ icon, title, items, favorites, onToggleFav }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* 헤더 */}
      <div className="mb-5 pb-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
          <span>{icon}</span>
          <span>{title}</span>
          <span className="text-sm font-normal text-gray-400 ml-1">({items.length})</span>
        </h2>
      </div>

      {/* 목록 */}
      {items.length === 0 ? (
        <div className="text-center py-24 text-gray-400 dark:text-gray-600">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-base">결과가 없습니다</p>
        </div>
      ) : (
        <div className="space-y-1.5">
          {items.map((item, i) => (
            <ItemRow
              key={`${item.name}-${i}`}
              item={item}
              isFav={favorites.includes(item.name)}
              onToggleFav={() => onToggleFav(item.name)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
