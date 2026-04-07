import aiPlatforms from './ai-platforms.json'
import imageAi from './image-ai.json'
import videoAudioAi from './video-audio-ai.json'
import mcpAutomation from './mcp-automation.json'
import devTools from './dev-tools.json'
import api from './api.json'
import hostingInfra from './hosting-infra.json'
import database from './database.json'
import marketingSeo from './marketing-seo.json'
import payment from './payment.json'
import nocodeCollab from './nocode-collab.json'
import designTools from './design-tools.json'
import imageAssets from './image-assets.json'
import videoAssets from './video-assets.json'
import soundAssets from './sound-assets.json'
import googleAi from './google-ai.json'
import googleSearch from './google-search.json'
import googleProductivity from './google-productivity.json'
import googleMedia from './google-media.json'
import googleCloud from './google-cloud.json'
import googleAds from './google-ads.json'
import googleDevices from './google-devices.json'
import googleEducation from './google-education.json'
import googleConsole from './google-console.json'

export const ALL_CATEGORIES = [
  aiPlatforms, imageAi, videoAudioAi, mcpAutomation,
  devTools, api, hostingInfra, database,
  marketingSeo, payment, nocodeCollab,
  designTools, imageAssets, videoAssets, soundAssets,
  googleAi, googleSearch, googleProductivity, googleMedia,
  googleCloud, googleAds, googleDevices, googleEducation, googleConsole,
]

export const GROUPS = [
  {
    id: 'ai',
    label: 'AI 관련',
    icon: '🤖',
    categories: [aiPlatforms, imageAi, videoAudioAi, mcpAutomation],
  },
  {
    id: 'dev',
    label: '개발 관련',
    icon: '💻',
    categories: [devTools, api, hostingInfra, database],
  },
  {
    id: 'marketing',
    label: '마케팅·비즈니스',
    icon: '📣',
    categories: [marketingSeo, payment, nocodeCollab],
  },
  {
    id: 'creative',
    label: '크리에이티브',
    icon: '🎨',
    categories: [designTools, imageAssets, videoAssets, soundAssets],
  },
  {
    id: 'google',
    label: '구글 생태계',
    icon: '🌐',
    categories: [googleAi, googleSearch, googleProductivity, googleMedia, googleCloud, googleAds, googleDevices, googleEducation, googleConsole],
  },
]
