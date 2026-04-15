import { useState } from 'react'
import CopyButton from './CopyButton'
import { CAT_META_MAP } from '../data/categories'

// 검색어 매칭 텍스트 하이라이트 (P3-3)
function Highlight({ text, query }) {
  if (!query || !text) return text
  const idx = text.toLowerCase().indexOf(query.toLowerCase())
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <mark style={{ background: '#fbbf24', color: '#1a1a1b', borderRadius: '2px', padding: '0 1px' }}>
        {text.slice(idx, idx + query.length)}
      </mark>
      {text.slice(idx + query.length)}
    </>
  )
}

const BADGE = {
  free:     { label: '무료',      bg: 'rgba(34,197,94,0.18)',  color: '#4ade80' },
  paid:     { label: '유료',      bg: 'rgba(249,115,22,0.18)', color: '#fb923c' },
  freepaid: { label: '무료+유료', bg: 'rgba(59,130,246,0.18)', color: '#60a5fa' },
  open:     { label: '오픈소스',  bg: 'rgba(168,85,247,0.18)', color: '#c084fc' },
  exp:      { label: '실험적',    bg: 'rgba(234,179,8,0.18)',  color: '#fbbf24' },
  dep:      { label: 'Deprecated', bg: 'rgba(100,100,100,0.18)', color: '#cccccc' },
}

function DetailPanel({ detail, url, cli }) {
  const labelStyle = { fontSize: '12px', fontWeight: '700', color: '#888888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }
  const sectionStyle = { marginBottom: '12px' }
  const linkStyle = { fontSize: '13px', color: '#60a5fa', textDecoration: 'none' }
  const codeStyle = {
    display: 'block', background: '#1e1e1f', border: '1px solid #404042', borderRadius: '6px',
    padding: '10px 12px', fontSize: '12px', color: '#e5e5e5', fontFamily: 'monospace',
    whiteSpace: 'pre-wrap', wordBreak: 'break-all', margin: 0, lineHeight: 1.6,
  }
  const subLabelStyle = { fontSize: '11px', color: '#666', marginBottom: '4px' }
  const hasExtra = detail.api_docs || detail.dashboard || detail.mcp || cli

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

      {/* API · MCP 섹션 — 해당 필드 있을 때만 표시 */}
      {hasExtra && (
        <>
          <hr style={{ border: 'none', borderTop: '1px solid #404042', margin: '14px 0' }} />

          {/* API 문서 */}
          {detail.api_docs && (
            <div style={sectionStyle}>
              <div style={labelStyle}>API 문서</div>
              <a href={detail.api_docs} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >{detail.api_docs}</a>
            </div>
          )}

          {/* 대시보드 */}
          {detail.dashboard && (
            <div style={sectionStyle}>
              <div style={labelStyle}>대시보드</div>
              <a href={detail.dashboard} target="_blank" rel="noopener noreferrer" style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >{detail.dashboard}</a>
            </div>
          )}

          {/* MCP 연결 */}
          {detail.mcp && (
            <div style={sectionStyle}>
              <div style={labelStyle}>MCP 연결 (CLAUDE)</div>
              {detail.mcp.desktop_config && (
                <div style={{ marginBottom: '8px' }}>
                  <div style={subLabelStyle}>Claude Desktop — claude_desktop_config.json</div>
                  <div style={{ position: 'relative' }}>
                    <pre style={codeStyle}>{detail.mcp.desktop_config}</pre>
                    <CopyButton text={detail.mcp.desktop_config} />
                  </div>
                </div>
              )}
              {detail.mcp.cli_command && (
                <div style={{ marginBottom: '8px' }}>
                  <div style={subLabelStyle}>Claude CLI</div>
                  <div style={{ position: 'relative' }}>
                    <pre style={codeStyle}>{detail.mcp.cli_command}</pre>
                    <CopyButton text={detail.mcp.cli_command} />
                  </div>
                </div>
              )}
              {detail.mcp.info_url && (
                <a href={detail.mcp.info_url} target="_blank" rel="noopener noreferrer" style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                >MCP 정보 →</a>
              )}
            </div>
          )}

          {/* CLI 도구 */}
          {cli && (
            <div style={sectionStyle}>
              <div style={labelStyle}>CLI 도구</div>
              {cli.install_win && (
                <div style={{ marginBottom: '8px' }}>
                  <div style={subLabelStyle}>Windows 설치 (winget)</div>
                  <div style={{ position: 'relative' }}>
                    <pre style={codeStyle}>{cli.install_win}</pre>
                    <CopyButton text={cli.install_win} />
                  </div>
                </div>
              )}
              {cli.install_mac && (
                <div style={{ marginBottom: '8px' }}>
                  <div style={subLabelStyle}>macOS 설치 (brew)</div>
                  <div style={{ position: 'relative' }}>
                    <pre style={codeStyle}>{cli.install_mac}</pre>
                    <CopyButton text={cli.install_mac} />
                  </div>
                </div>
              )}
              {cli.commands && cli.commands.length > 0 && (
                <div style={{ marginBottom: '8px' }}>
                  <div style={subLabelStyle}>주요 명령어</div>
                  {cli.commands.map((cmd, i) => (
                    <div key={i} style={{ marginBottom: '6px' }}>
                      <div style={{ fontSize: '11px', color: '#888', marginBottom: '2px' }}>{cmd.label}</div>
                      <div style={{ position: 'relative' }}>
                        <pre style={codeStyle}>{cmd.code}</pre>
                        <CopyButton text={cmd.code} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {cli.info_url && (
                <a href={cli.info_url} target="_blank" rel="noopener noreferrer" style={linkStyle}
                  onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                  onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
                >CLI 문서 →</a>
              )}
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default function ItemRow({ item, isFav, onToggleFav, searchQuery }) {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const badge = BADGE[item.badge] || BADGE.free
  const catMeta = item._catId ? CAT_META_MAP[item._catId] : null

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
            <Highlight text={item.name} query={searchQuery} />
          </div>
          {item.nameKo && (
            <div style={{ fontSize: '12px', color: '#cccccc', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: '2px' }}>
              <Highlight text={item.nameKo} query={searchQuery} />
            </div>
          )}
        </div>

        {/* 설명 — flex-1 */}
        <div style={{ flex: 1, minWidth: 0, fontSize: '15px', color: '#ffffff', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          <Highlight text={item.desc} query={searchQuery} />
        </div>

        {/* 카테고리 출처 — 검색·즐겨찾기·가상뷰에서만 표시 */}
        {catMeta && (
          <span style={{
            flexShrink: 0, fontSize: '11px', fontWeight: '500',
            padding: '2px 8px', borderRadius: '999px',
            background: 'rgba(148,163,184,0.12)',
            color: '#94a3b8',
            border: '1px solid rgba(148,163,184,0.25)',
            whiteSpace: 'nowrap',
          }}>
            {catMeta.icon} {catMeta.title}
          </span>
        )}

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
            <DetailPanel detail={item.detail} url={item.url} cli={item.cli} />
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
