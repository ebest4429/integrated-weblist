# CONTEXT.md

## 프로젝트 정체성

**통합 웹 리소스 허브 (Integrated Web Resource Hub)**
AI·개발·콘텐츠 제작·마케팅·자동화에 필요한 서비스 링크를 분류·통합한 단일 HTML 웹 리소스 허브.
사이드바 네비게이션 + 검색 + 즐겨찾기 구조로 설계된다.

---

## 참조 소스 프로젝트

| 경로 | 내용 |
|------|------|
| `C:/Users/admin/Project/Project-webproduct/ai_resource_hub/index.html` | AI·개발 서비스 14카테고리 (기준 데이터) |
| `C:/Users/admin/Project/Project-webproduct/google-ecosystem-map/index.html` | 구글 생태계 서비스 9카테고리 (기준 데이터) |
| `.Source-Files/소스.md` | 추가 항목 목록 + 개편 방향 |

---

## 기술 환경

| 항목 | 내용 |
|------|------|
| 현재 구현 | 단일 HTML 파일 (빌드 도구 없음) |
| 언어 | HTML / CSS / Vanilla JS |
| 추천 이관 스택 | Vite + Vue 3 (향후 Phase 2 이후 검토) |
| 데이터 저장 | JS 인라인 배열 (SECTIONS) |
| 즐겨찾기 | localStorage |
| 배포 | GitHub Pages (정적 단일 파일) |

---

## 설계 원칙

| 원칙 | 내용 |
|------|------|
| 상단 네비게이션 없음 | 사이드바가 카테고리 네비게이션 전담 |
| 사이드바 리사이즈 | 드래그 핸들로 너비 조절 (150px~450px) |
| 타이틀 영역 | 사이드바 상단에 사이트 소개 고정 |
| 검색바 | 메인 콘텐츠 헤더 영역에 배치 |
| 재분류 원칙 | 두 소스 프로젝트 정보를 새 카테고리 기준으로 전면 재분류 |

---

## 카테고리 구조

| # | 카테고리 | 색상 |
|---|---------|------|
| 1 | 🤖 AI 플랫폼 | #a78bfa |
| 2 | 🎨 이미지 AI·생성 | #f472b6 |
| 3 | 🎬 영상·음성 AI | #fb923c |
| 4 | 💻 개발·코딩 도구 | #38bdf8 |
| 5 | ☁️ 호스팅·배포 | #34d399 |
| 6 | 🔌 API 제공 | #60a5fa |
| 7 | 🧩 MCP·에이전트 | #c084fc |
| 8 | 🔄 자동화 도구 | #4ade80 |
| 9 | 🗄️ 데이터베이스 | #2dd4bf |
| 10 | 📣 마케팅·SEO | #fbbf24 |
| 11 | 🛠️ 노코드·협업·디자인 | #6ee7b7 |
| 12 | 🖼️ 미디어 에셋 | #e879f9 |
| 13 | 💳 결제·핀테크 | #f87171 |
| 14 | 🌐 구글 생태계 | #93c5fd |
| * | ⭐ 즐겨찾기 | — |

---

## 디렉토리 구조

```
integrated-weblist/
├── .claude/                  # 개발 설정
│   ├── plans/                # 페이지플랜
│   │   ├── designs/          # 사전설계
│   │   └── weblist-master.md
│   └── WORKSPACE.md
├── .Source-Files/            # 기획·참고 문서
│   └── 소스.md
└── index.html                # 메인 결과물 (단일 파일)
```
