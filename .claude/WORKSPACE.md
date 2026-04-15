# WORKSPACE.md

> 세션 시작 시 읽는다.
> **기본 읽기**: 현재 위치 + 남은 과제까지.
> **진행 이력**: 필요할 때만 추가 요청.

---

## 현재 위치

| 항목 | 값 |
|------|-----|
| PROJECT | 통합 웹 리소스 허브 |
| 현재 Phase | Phase 6 — 검색 버그 수정 + 신규 데이터 추가 |
| 상태 | 🔄 진행 중 |
| 현재 플랜 | `.claude/plans/phase6-search-data.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |

---

## 남은 과제

### P6-1: 검색 버그 수정 — 완료
- App.jsx 사이드바 선택 시 groupFilter 강제 설정 버그 수정 — 커밋 완료

### P6-2 ①: 검색 결과 카테고리 출처 뱃지 표시 — 완료
- App.jsx: 검색·즐겨찾기·MCP·CLI 4개 루프에 `_catId` 필드 추가
- ItemRow.jsx: CAT_META_MAP 활용 카테고리 칩 렌더링 (JSON 수정 없음)

### P6-2: 신규 데이터 추가 (신규추가.md 기반)

**MCP·에이전트·자동화 섹션 추가 항목 (현재 13개 → 약 22개 예정):**
- Context7, sequential-thinking MCP, fetch MCP, Firecrawl MCP, Playwright MCP
- 21st.dev Magic MCP, Magic UI MCP, shadcn MCP
- YouTube Data MCP, Fiddler MCP (Telerik)
- Gemini MCP 얼티밋, Nanobanana API MCP, image-generation MCP — URL 불명, 조사 필요
- NotebookLM MCP CLI

**개발 도구·코딩 섹션 추가 항목 (기존 통합):**
- Node.js, Next.js, React, Vue, Vite, Electron — 프레임워크/런타임
- Anaconda, WSL2, Chocolatey — 개발 환경 도구

**기타 섹션 추가:**
- Notion → 노코드·협업 섹션
- Bitly → 마케팅·광고·SEO 섹션
- GitHub (토큰 발급 페이지) → 개발 도구 섹션

### 보류 항목 (Phase 5에서 이월)

- 훅 구조 문제: 추후 구조 정리 시 해결 예정
- designs/phase2-detail.md: 추후 파일 구조 정리 시 처리 예정
- 전체 링크 유효성 검증: 프로젝트 재가동 시 문제 발생 여부 확인 후 처리

---

## 진행 이력

### 2026-04-15 Phase 6 전환

| 항목 | 내용 |
|------|------|
| 전환 | WORKSPACE.phase5-cli.md 아카이브 후 새 WORKSPACE.md 작성 |
| 배경 | 검색 버그 발견 (사이드바 선택 시 groupFilter 자동 설정 → 검색 범위 제한) |
| 방향 | 버그 수정 + 신규 데이터 추가(MCP 확장, 프레임워크 통합). 전체 카테고리 재구조화는 제외. |
