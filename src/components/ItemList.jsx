import ItemRow from './ItemRow'

export default function ItemList({ items, favorites, onToggleFav, searchQuery }) {
  return (
    <div style={{ padding: '24px 32px', maxWidth: '1600px' }}>
      {items.length === 0 ? (
        <div style={{ textAlign: 'center', paddingTop: '96px' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>🔍</div>
          <div style={{ fontSize: '18px', color: '#ffffff', marginBottom: '8px' }}>검색 결과가 없습니다</div>
          {searchQuery ? (
            <>
              <div style={{ fontSize: '14px', color: '#888888' }}>
                <strong style={{ color: '#d4d4d8' }}>"{searchQuery}"</strong>에 해당하는 서비스가 없습니다
              </div>
              <div style={{ fontSize: '13px', color: '#666668', marginTop: '12px', lineHeight: 1.7 }}>
                · 영문 서비스명으로 검색해 보세요<br />
                · 검색 범위를 <strong style={{ color: '#94a3b8' }}>🌐 전체</strong>로 변경해 보세요<br />
                · 철자를 다시 확인해 보세요
              </div>
            </>
          ) : (
            <div style={{ fontSize: '14px', color: '#888888' }}>
              이 카테고리에 항목이 없습니다
            </div>
          )}
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {items.map((item, i) => (
            <ItemRow
              key={`${item.name}-${i}`}
              item={item}
              isFav={favorites.includes(item.name)}
              onToggleFav={() => onToggleFav(item.name)}
              searchQuery={searchQuery}
            />
          ))}
        </div>
      )}
    </div>
  )
}
