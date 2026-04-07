import ItemRow from './ItemRow'

export default function ItemList({ items, favorites, onToggleFav }) {
  return (
    <div style={{ padding: '24px 32px', maxWidth: '1600px' }}>
      {items.length === 0 ? (
        <div style={{ textAlign: 'center', paddingTop: '96px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <div style={{ fontSize: '18px', color: '#ffffff' }}>결과가 없습니다</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
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
