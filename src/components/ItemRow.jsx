import { useState } from 'react'

const BADGE = {
  free:     { label: '무료',      bg: 'rgba(34,197,94,0.18)',  color: '#4ade80' },
  paid:     { label: '유료',      bg: 'rgba(249,115,22,0.18)', color: '#fb923c' },
  freepaid: { label: '무료+유료', bg: 'rgba(59,130,246,0.18)', color: '#60a5fa' },
  open:     { label: '오픈소스',  bg: 'rgba(168,85,247,0.18)', color: '#c084fc' },
  exp:      { label: '실험적',    bg: 'rgba(234,179,8,0.18)',  color: '#fbbf24' },
  dep:      { label: 'Deprecated', bg: 'rgba(100,100,100,0.18)', color: '#cccccc' },
}

function DetailPanel({ detail, url }) {
  const labelStyle = { fontSize: '12px', fontWeight: '700', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }
  const sectionStyle = { marginBottom: '12px' }

  return (
    <div style={{ fontSize: '14px', color: '#cccccc', lineHeight: 1.7 }}>
      {detail.intro && (
        <div style={sectionStyle}>
          <p style={{ margin: 0, color: '#e5e5e5' }}>{detail.intro}</p>
        </div>
      )}
      {detail.features && detail.features.length > 0 && (
        <div style={sectionStyle}>
          <div style={labelStyle}>주요 기능</div>
          <ul style={{ margin: 0, paddingLeft: '18px' }}>
            {detail.features.map((f, i) => (
              <li key={i} style={{ marginBottom: '2px' }}>{f}</li>
            ))}
          </ul>
        </div>
      )}
      {detail.usage && (
        <div style={sectionStyle}>
          <div style={labelStyle}>사용법</div>
          <p style={{ margin: 0 }}>{detail.usage}</p>
        </div>
      )}
      {detail.notes && (
        <div style={sectionStyle}>
          <div style={labelStyle}>기타</div>
          <p style={{ margin: 0 }}>{detail.notes}</p>
        </div>
      )}
      <a href={url} target="_blank" rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: '4px', fontSize: '13px', color: '#60a5fa', textDecoration: 'none' }}
        onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
        onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
      >{url}</a>
    </div>
  )
}

export default function ItemRow({ item, isFav, onToggleFav }) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const badge = BADGE[item.badge] || BADGE.free

  return (
    <div style={{ border: '1px solid #404042', borderRadius: '8px', overflow: 'hidden' }}>
      {/* 메인 행 */}
      <div
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: '12px',
          padding: '10px 16px',
          background: hovered ? '#363637' : '#303031',
          cursor: 'pointer', userSelect: 'none',
        }}
      >
        {/* 토글 */}
        <span style={{ color: '#888888', fontSize: '12px', width: '12px', flexShrink: 0 }}>
          {open ? '▾' : '▸'}
        </span>

        {/* 서비스명 2줄 — 고정 너비 */}
        <div style={{ width: '280px', flexShrink: 0, minWidth: 0 }}>
          <div style={{ fontSize: '15px', fontWeight: '600', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {item.name}
          </div>
          {item.nameKo && (
            <div style={{ fontSize: '12px', color: '#cccccc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: '2px' }}>
              {item.nameKo}
            </div>
          )}
        </div>

        {/* 설명 — flex-1 */}
        <div style={{ flex: 1, minWidth: 0, fontSize: '15px', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {item.desc}
        </div>

        {/* 뱃지 */}
        <span style={{
          flexShrink: 0, fontSize: '12px', fontWeight: '600',
          padding: '3px 10px', borderRadius: '999px',
          background: badge.bg, color: badge.color, whiteSpace: 'nowrap',
        }}>
          {badge.label}
        </span>

        {/* 바로가기 */}
        <a
          href={item.url} target="_blank" rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={{ flexShrink: 0, fontSize: '14px', padding: '6px 14px', background: '#3b82f6', color: '#ffffff', borderRadius: '6px', textDecoration: 'none', fontWeight: '500', whiteSpace: 'nowrap' }}
          onMouseEnter={e => e.currentTarget.style.background = '#2563eb'}
          onMouseLeave={e => e.currentTarget.style.background = '#3b82f6'}
        >바로가기 →</a>

        {/* 즐겨찾기 — 맨 끝 */}
        <button
          onClick={e => { e.stopPropagation(); onToggleFav() }}
          style={{ flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer', fontSize: '18px', lineHeight: 1, color: isFav ? '#fbbf24' : '#555558', padding: 0 }}
          onMouseEnter={e => { if (!isFav) e.currentTarget.style.color = '#fbbf24' }}
          onMouseLeave={e => { if (!isFav) e.currentTarget.style.color = '#555558' }}
        >⭐</button>
      </div>

      {/* 펼침 상세 */}
      {open && (
        <div style={{ padding: '14px 20px 14px 44px', background: '#282829', borderTop: '1px solid #404042' }}>
          {item.detail ? (
            <DetailPanel detail={item.detail} url={item.url} />
          ) : (
            <>
              <p style={{ fontSize: '15px', color: '#ffffff', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              <a href={item.url} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-block', marginTop: '8px', fontSize: '13px', color: '#60a5fa', textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >{item.url}</a>
            </>
          )}
        </div>
      )}
    </div>
  )
}
