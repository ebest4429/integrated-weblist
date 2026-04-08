// 카테고리 메타데이터 (title·icon·itemCount만 정적 보유, items는 DATA_LOADERS로 동적 로드)
// 취지: JSON 전체를 정적 import하면 525kB 단일 청크 → 동적 import로 분리하여 초기 로드 경량화
const CATEGORY_META_RAW = [
  { id: 'ai-platforms',        title: 'AI 플랫폼·챗봇',           icon: '🤖', groupId: 'ai',        itemCount: 18 },
  { id: 'image-ai',            title: '이미지·생성 AI',            icon: '🎨', groupId: 'ai',        itemCount: 12 },
  { id: 'video-audio-ai',      title: '영상·음성 AI',              icon: '🎬', groupId: 'ai',        itemCount: 17 },
  { id: 'mcp-automation',      title: 'MCP·에이전트·자동화',        icon: '🧩', groupId: 'ai',        itemCount: 13 },
  { id: 'dev-tools',           title: '개발 도구·코딩',            icon: '💻', groupId: 'dev',       itemCount: 24 },
  { id: 'api',                 title: '주요 API',                  icon: '🔌', groupId: 'dev',       itemCount: 14 },
  { id: 'hosting-infra',       title: '호스팅·배포·인프라',         icon: '☁️', groupId: 'dev',       itemCount: 18 },
  { id: 'database',            title: '데이터베이스',               icon: '🗄️', groupId: 'dev',       itemCount: 13 },
  { id: 'marketing-seo',       title: '마케팅·광고·SEO',           icon: '📣', groupId: 'marketing', itemCount: 21 },
  { id: 'payment',             title: '결제·핀테크',               icon: '💳', groupId: 'marketing', itemCount: 13 },
  { id: 'nocode-collab',       title: '노코드·로우코드·협업',        icon: '🛠️', groupId: 'marketing', itemCount: 13 },
  { id: 'design-tools',        title: '디자인 도구',               icon: '🎨', groupId: 'creative',  itemCount: 8  },
  { id: 'image-assets',        title: '이미지 에셋·템플릿',         icon: '🖼️', groupId: 'creative',  itemCount: 10 },
  { id: 'video-assets',        title: '영상 에셋·템플릿',           icon: '🎞️', groupId: 'creative',  itemCount: 12 },
  { id: 'sound-assets',        title: '사운드 에셋·템플릿',         icon: '🎵', groupId: 'creative',  itemCount: 12 },
  { id: 'google-ai',           title: '구글 AI·생성형',            icon: '✨', groupId: 'google',    itemCount: 12 },
  { id: 'google-search',       title: '구글 검색·정보',            icon: '🔍', groupId: 'google',    itemCount: 16 },
  { id: 'google-productivity', title: '구글 생산성·워크스페이스',    icon: '💼', groupId: 'google',    itemCount: 16 },
  { id: 'google-media',        title: '구글 미디어·엔터테인먼트',   icon: '🎬', groupId: 'google',    itemCount: 13 },
  { id: 'google-cloud',        title: '구글 개발자·클라우드',       icon: '☁️', groupId: 'google',    itemCount: 17 },
  { id: 'google-ads',          title: '구글 광고·비즈니스',         icon: '📊', groupId: 'google',    itemCount: 12 },
  { id: 'google-devices',      title: '구글 기기·OS',              icon: '📱', groupId: 'google',    itemCount: 12 },
  { id: 'google-education',    title: '구글 교육·학습',            icon: '🎓', groupId: 'google',    itemCount: 10 },
  { id: 'google-console',      title: '구글 관리 콘솔',            icon: '🖥️', groupId: 'google',    itemCount: 12 },
]

export const CATEGORY_META = CATEGORY_META_RAW

// 빠른 id 조회용 맵
export const CAT_META_MAP = Object.fromEntries(CATEGORY_META_RAW.map(m => [m.id, m]))

export const GROUPS = [
  {
    id: 'ai', label: 'AI 관련', icon: '🤖',
    categories: CATEGORY_META_RAW.filter(m => m.groupId === 'ai'),
  },
  {
    id: 'dev', label: '개발 관련', icon: '💻',
    categories: CATEGORY_META_RAW.filter(m => m.groupId === 'dev'),
  },
  {
    id: 'marketing', label: '마케팅·비즈니스', icon: '📣',
    categories: CATEGORY_META_RAW.filter(m => m.groupId === 'marketing'),
  },
  {
    id: 'creative', label: '크리에이티브', icon: '🎨',
    categories: CATEGORY_META_RAW.filter(m => m.groupId === 'creative'),
  },
  {
    id: 'google', label: '구글 생태계', icon: '🌐',
    categories: CATEGORY_META_RAW.filter(m => m.groupId === 'google'),
  },
]

// 동적 로더 — Vite가 각 JSON을 별도 async 청크로 분리 (초기 로드에서 제외)
export const DATA_LOADERS = {
  'ai-platforms':         () => import('./ai-platforms.json'),
  'image-ai':             () => import('./image-ai.json'),
  'video-audio-ai':       () => import('./video-audio-ai.json'),
  'mcp-automation':       () => import('./mcp-automation.json'),
  'dev-tools':            () => import('./dev-tools.json'),
  'api':                  () => import('./api.json'),
  'hosting-infra':        () => import('./hosting-infra.json'),
  'database':             () => import('./database.json'),
  'marketing-seo':        () => import('./marketing-seo.json'),
  'payment':              () => import('./payment.json'),
  'nocode-collab':        () => import('./nocode-collab.json'),
  'design-tools':         () => import('./design-tools.json'),
  'image-assets':         () => import('./image-assets.json'),
  'video-assets':         () => import('./video-assets.json'),
  'sound-assets':         () => import('./sound-assets.json'),
  'google-ai':            () => import('./google-ai.json'),
  'google-search':        () => import('./google-search.json'),
  'google-productivity':  () => import('./google-productivity.json'),
  'google-media':         () => import('./google-media.json'),
  'google-cloud':         () => import('./google-cloud.json'),
  'google-ads':           () => import('./google-ads.json'),
  'google-devices':       () => import('./google-devices.json'),
  'google-education':     () => import('./google-education.json'),
  'google-console':       () => import('./google-console.json'),
}
