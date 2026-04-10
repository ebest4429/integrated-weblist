import { useState } from 'react'

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    })
  }

  return (
    <button
      onClick={handleCopy}
      title="복사"
      style={{
        position: 'absolute', top: '8px', right: '8px',
        background: copied ? '#22c55e22' : '#ffffff11',
        border: '1px solid ' + (copied ? '#22c55e55' : '#555558'),
        borderRadius: '4px',
        padding: '3px 8px',
        cursor: 'pointer',
        fontSize: '11px',
        color: copied ? '#4ade80' : '#aaaaaa',
        lineHeight: 1.4,
        transition: 'all 0.15s',
      }}
      onMouseEnter={e => { if (!copied) e.currentTarget.style.background = '#ffffff22' }}
      onMouseLeave={e => { if (!copied) e.currentTarget.style.background = '#ffffff11' }}
    >
      {copied ? '복사됨' : '복사'}
    </button>
  )
}
