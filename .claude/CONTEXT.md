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
| `.Source-Files/master-source.md` | 인덱스 — 그룹별 파일 링크 + 전체 현황 요약 (P2-1에서 인덱스로 전환) |
| `.Source-Files/master-source-ai.md` | AI 관련 4섹션 60개 (서비스 추가·detail 작성 여기서) |
| `.Source-Files/master-source-dev.md` | 개발 관련 4섹션 69개 |
| `.Source-Files/master-source-marketing.md` | 마케팅·비즈니스 3섹션 47개 |
| `.Source-Files/master-source-creative.md` | 크리에이티브 4섹션 42개 |
| `.Source-Files/master-source-google.md` | 구글 생태계 9섹션 120개 |
| `src/data/*.json` | 카테고리별 JSON (split 소스 파일에서 자동 생성) |
| `.Source-Files/소스.md` | 원본 참조 메모 (소스 프로젝트 경로·추가 항목 URL) |

> 서비스 추가/수정 → 해당 그룹 `master-source-{그룹}.md` 수정 → `python scripts/gen-json.py` 실행 → JSON 자동 갱신
> detail 작성 → 소스 파일 detail 열 ✅ 마킹 → `python scripts/gen-json.py` → `python scripts/verify-detail.py` 검증

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
│   │   ├── weblist-master.md         # 마스터플랜
│   │   ├── phase3-search-filter.md   # 완료
│   │   ├── phase4-api-mcp.md         # 현재 활성 플랜
│   │   ├── archive/                  # 완료된 플랜 아카이브
│   │   │   ├── phase1-build.md
│   │   │   ├── phase2-detail.md
│   │   │   └── WORKSPACE.phase2-detail.md
│   │   └── designs/
│   │       └── phase2-detail.md      # 미삭제 잔재 (WORKSPACE.md 보류 항목 참조)
│   ├── CLAUDE.md
│   ├── CONTEXT.md                  # 이 파일
│   ├── RULES.md
│   └── WORKSPACE.md
├── .Source-Files/
│   ├── master-source.md            # 인덱스 (P2-1에서 전환)
│   ├── master-source-ai.md         # AI 관련 4섹션 60개
│   ├── master-source-dev.md        # 개발 관련 4섹션 69개
│   ├── master-source-marketing.md  # 마케팅·비즈니스 3섹션 47개
│   ├── master-source-creative.md   # 크리에이티브 4섹션 42개
│   ├── master-source-google.md     # 구글 생태계 9섹션 120개
│   └── 소스.md                     # 원본 참조 메모
├── scripts/
│   ├── gen-json.py                 # split 소스 파일 → JSON 자동 생성 (P2-4에서 split 읽기로 전환)
│   └── verify-detail.py            # 소스 마커↔JSON detail 교차 검증 (P2-3 신규)
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
      "desc": "설명 텍스트 (1줄 요약)",
      "badge": "freepaid",
      "detail": {
        "intro": "서비스 소개",
        "features": ["주요기능1", "주요기능2"],
        "usage": "사용법 설명",
        "notes": "기타 메모",
        "api_docs": "https://...",
        "dashboard": "https://...",
        "mcp": {
          "desktop_config": "{ \"mcpServers\": { ... } }",
          "cli_command": "claude mcp add 서비스명 -- npx ...",
          "info_url": "https://..."
        }
      }
    }
  ]
}
```

**badge 값:** `free` `paid` `freepaid` `open` `exp` `dep`

**detail 필드:** optional — 없는 서비스는 desc만 표시. 그룹별 split 파일 기준 카테고리별 순차 작성.

**Phase 4 추가 필드 (detail 객체 내 선택적):**
- `api_docs` — API 문서 링크. API 제공 서비스만 포함.
- `dashboard` — 대시보드·콘솔 링크. 로그인 후 관리 페이지가 있는 서비스만 포함.
- `mcp` — MCP 연결 정보. Claude에서 직접 연결 가능한 서비스만 포함.
  - `desktop_config` — claude_desktop_config.json 스니펫 (필수)
  - `cli_command` — `claude mcp add` CLI 명령어 (필수)
  - `info_url` — 공식 문서 링크 (보조). `desktop_config`/`cli_command` 없이 `info_url`만 단독 사용 금지.

> **gen-json.py 호환성**: api_docs·dashboard·mcp는 detail 객체 내에 위치하므로 gen-json.py 실행 시 기존 detail 보존 로직에 의해 유지됨. 단, master-source-*.md에는 별도 컬럼이 없으므로 Phase 4 데이터는 JSON 직접 관리.
