# CONTEXT.md

## 프로젝트 정체성

**통합 웹 리소스 허브 (Integrated Web Resource Hub)**
AI·개발·콘텐츠 제작·마케팅·자동화에 필요한 서비스 링크를 분류·통합한 웹 리소스 허브.
좌측 사이드바 네비게이션 + 검색 + 즐겨찾기 구조. 상단 nav 없음.

---

## 기술 스택 (확정)

| 항목 | 내용 |
|------|------|
| 빌드 도구 | Vite 8 |
| 프레임워크 | React 19 |
| 스타일 | Tailwind CSS v4 (`@tailwindcss/vite`) |
| 언어 | JSX (JavaScript ES Module) |
| 데이터 | `src/data/` 카테고리별 JSON 파일 |
| 즐겨찾기 | localStorage |
| 배포 | GitHub Pages (`vite build` → `dist/`, base: `/integrated-weblist/`) |
| 레포 | https://github.com/ebest4429/integrated-weblist |

---

## 데이터 소스

| 경로 | 내용 |
|------|------|
| `.Source-Files/master-source.md` | **마스터 소스** — 24개 섹션 338개 서비스 테이블 (추가·수정 기준) |
| `src/data/*.json` | 카테고리별 JSON (master-source.md에서 자동 생성) |
| `.Source-Files/소스.md` | 원본 참조 메모 (소스 프로젝트 경로·추가 항목 URL) |

> 서비스 추가/수정 → `master-source.md` 수정 → `python scripts/gen-json.py` 실행 → JSON 자동 갱신

---

## 카테고리 구조 (5그룹 24섹션)

### 그룹: AI 관련
| 파일 | 섹션 | 서비스 수 |
|------|------|---------|
| `ai-platforms.json` | 🤖 AI 플랫폼·챗봇 | 18 |
| `image-ai.json` | 🎨 이미지·생성 AI | 12 |
| `video-audio-ai.json` | 🎬 영상·음성 AI | 17 |
| `mcp-automation.json` | 🧩 MCP·에이전트·자동화 | 13 |

### 그룹: 개발 관련
| 파일 | 섹션 | 서비스 수 |
|------|------|---------|
| `dev-tools.json` | 💻 개발 도구·코딩 | 24 |
| `api.json` | 🔌 주요 API | 14 |
| `hosting-infra.json` | ☁️ 호스팅·배포·인프라 | 18 |
| `database.json` | 🗄️ 데이터베이스 | 13 |

### 그룹: 마케팅·비즈니스
| 파일 | 섹션 | 서비스 수 |
|------|------|---------|
| `marketing-seo.json` | 📣 마케팅·광고·SEO | 21 |
| `payment.json` | 💳 결제·핀테크 | 13 |
| `nocode-collab.json` | 🛠️ 노코드·로우코드·협업 | 13 |

### 그룹: 크리에이티브
| 파일 | 섹션 | 서비스 수 |
|------|------|---------|
| `design-tools.json` | 🎨 디자인 도구 | 8 |
| `image-assets.json` | 🖼️ 이미지 에셋·템플릿 | 10 |
| `video-assets.json` | 🎞️ 영상 에셋·템플릿 | 12 |
| `sound-assets.json` | 🎵 사운드 에셋·템플릿 | 12 |

### 그룹: 구글 생태계
| 파일 | 섹션 | 서비스 수 |
|------|------|---------|
| `google-ai.json` | ✨ 구글 AI·생성형 | 12 |
| `google-search.json` | 🔍 구글 검색·정보 | 16 |
| `google-productivity.json` | 💼 구글 생산성·워크스페이스 | 16 |
| `google-media.json` | 🎬 구글 미디어·엔터테인먼트 | 13 |
| `google-cloud.json` | ☁️ 구글 개발자·클라우드 | 17 |
| `google-ads.json` | 📊 구글 광고·비즈니스 | 12 |
| `google-devices.json` | 📱 구글 기기·OS | 12 |
| `google-education.json` | 🎓 구글 교육·학습 | 10 |
| `google-console.json` | 🖥️ 구글 관리 콘솔 | 12 |

---

## 디렉토리 구조

```
integrated-weblist/
├── .claude/
│   ├── plans/
│   │   ├── weblist-master.md       # 마스터플랜
│   │   └── phase1-build.md         # 현재 활성 플랜
│   ├── CLAUDE.md
│   ├── CONTEXT.md                  # 이 파일
│   ├── RULES.md
│   └── WORKSPACE.md
├── .Source-Files/
│   ├── master-source.md            # 전체 서비스 마스터 소스 (테이블)
│   └── 소스.md                     # 원본 참조 메모
├── scripts/
│   └── gen-json.py                 # master-source.md → JSON 자동 생성
├── src/
│   ├── data/
│   │   ├── categories.js           # 전체 카테고리 + 그룹 인덱스
│   │   └── *.json                  # 24개 카테고리별 JSON
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── SidebarGroup.jsx
│   │   ├── ItemList.jsx
│   │   └── ItemRow.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css                   # @import "tailwindcss" + CSS 변수
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

---

## JSON 스키마

```json
{
  "id": "ai-platforms",
  "icon": "🤖",
  "title": "AI 플랫폼·챗봇",
  "group": "ai",
  "items": [
    {
      "name": "ChatGPT",
      "url": "https://chat.openai.com",
      "desc": "설명 텍스트",
      "badge": "freepaid"
    }
  ]
}
```

**badge 값:** `free` `paid` `freepaid` `open` `exp` `dep`
