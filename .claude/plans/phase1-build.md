# Phase 1 — 초기화 + 단일 HTML 구축

> 목표: 두 소스 프로젝트(ai_resource_hub, google-ecosystem-map)와 소스.md 추가 항목을 통합하여
> 사이드바 리사이즈 구조의 단일 index.html 웹 리소스 허브를 완성한다.

---

## 작업 항목

### 1. 프로젝트 초기화

- ✅ WORKSPACE.md 이름 변경 (구 챗봇 WORKSPACE 아카이브)
- ✅ 챗봇 플랜 파일 아카이브 (`plans/archive/chatbot/`)
- ✅ CONTEXT.md 재작성 (통합 웹 허브 기준)
- ✅ RULES.md 재작성
- ✅ weblist-master.md 작성
- ✅ phase1-build.md 작성 (이 파일)
- ✅ WORKSPACE.md 신규 작성

### 2. CLAUDE.md 프로젝트 정체성 업데이트

- ✅ 프로젝트 정체성 섹션 수정
- ✅ 마스터플랜 참조 경로 수정

### 3. index.html 구현

- ✅ 레이아웃 구조 (사이드바 + 메인)
  - 사이드바: 타이틀 + 사이트 소개 + 카테고리 네비
  - 메인: 검색바 + 카드 리스트
- ✅ 사이드바 드래그 리사이즈 (180px~400px)
- ✅ 14개 카테고리 데이터 구성
  - ✅ 🤖 AI 플랫폼
  - ✅ 🎨 이미지 AI·생성
  - ✅ 🎬 영상·음성 AI
  - ✅ 💻 개발·코딩 도구
  - ✅ ☁️ 호스팅·배포
  - ✅ 🔌 API 제공
  - ✅ 🧩 MCP·에이전트
  - ✅ 🔄 자동화 도구
  - ✅ 🗄️ 데이터베이스
  - ✅ 📣 마케팅·SEO
  - ✅ 🛠️ 노코드·협업·디자인
  - ✅ 🖼️ 미디어 에셋
  - ✅ 💳 결제·핀테크
  - ✅ 🌐 구글 생태계
- ✅ 검색 기능 (전체 검색)
- ✅ 즐겨찾기 (localStorage)
- ✅ 뱃지 표시 (무료/유료/무료+유료/오픈소스)

### 4. 기본 소스 데이터 파일 작성

- ✅ `.Source-Files/master-source.md` 작성 — 전체 서비스 카테고리별 테이블
  - 취지: JSON 데이터 작성 전 단일 마스터 소스로 활용. 새 서비스 추가 시 이 파일에 먼저 기록 후 JSON 반영.
  - ai_resource_hub + google-ecosystem-map + 소스.md 추가 항목 전체 통합

### 5. Git 초기화 + 원격 레포 연결

- ✅ `git init` + GitHub 레포 생성 + 첫 커밋 + push (https://github.com/ebest4429/integrated-weblist)

### 6. Vite + React + Tailwind 프로젝트 구현

- ✅ 6-1. 프로젝트 초기화 (`npm create vite@latest . -- --template react`)
- ✅ 6-2. Tailwind CSS v4 설치 및 설정 (`@tailwindcss/vite`)
- ✅ 6-3. 디렉토리 구조 생성 (`src/data/`, `src/components/`)
- ✅ 6-4. JSON 데이터 파일 작성 — 24개 파일 338개 서비스 (gen-json.py 자동 생성)
- ✅ 6-5. Sidebar / SidebarGroup 컴포넌트
- ✅ 6-6. ItemList / ItemRow 컴포넌트 (아코디언 펼침 포함)
- ✅ 6-7. 검색 기능 (실시간 필터링 — App.jsx)
- ✅ 6-8. 즐겨찾기 (localStorage — App.jsx)
- ✅ 6-9. GitHub Pages 배포 설정 (`vite build` + `gh-pages`)

---

## 완료 조건

- [x] 브라우저에서 Vite+React 앱 정상 렌더링
- [x] 사이드바 드래그로 너비 조절 가능 (180~400px)
- [x] 카테고리 클릭 → 해당 섹션으로 전환
- [x] 검색어 입력 → 실시간 필터링
- [x] 즐겨찾기 추가 → 페이지 새로고침 후에도 유지
- [x] 338개 서비스 전체 포함 (24개 JSON)
- [x] 소스.md 추가 항목 반영
- ✅ GitHub Pages 실제 배포 (`npm run deploy` 실행)
