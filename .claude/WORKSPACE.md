# WORKSPACE.md

> 세션 시작 시 읽는다.
> **기본 읽기**: 현재 위치 + 남은 과제까지.
> **진행 이력**: 필요할 때만 추가 요청.

---

## 현재 위치

| 항목 | 값 |
|------|-----|
| PROJECT | 통합 웹 리소스 허브 |
| 현재 Phase | Phase 1 — 초기화 + 단일 HTML 구축 |
| 상태 | 🔄 진행중 — 프로젝트 초기화 완료, index.html 구현 완료 |
| 현재 플랜 | `.claude/plans/phase1-build.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |

---

## 남은 과제

### 다음 세션 — 구현 시작

협의 완료. 바로 구현 진입 가능.

**확정 스택:** Vite + React + Tailwind CSS  
**확정 구조:** 사이드바(그룹핑) + 리스트 + 인라인 아코디언 상세  
**데이터:** `src/data/` 카테고리별 JSON

**작업 순서:**
1. Vite + React + Tailwind 프로젝트 초기화 (`npm create vite@latest`)
2. 디렉토리 구조 생성
3. Sidebar / SidebarGroup 컴포넌트
4. ItemList / ItemRow / ItemDetail 컴포넌트 (아코디언)
5. JSON 데이터 파일 작성
6. 검색·즐겨찾기 기능

**참고 파일:** `.claude/plans/weblist-master.md` — 전체 결정사항 기록됨

---

## 진행 이력

### 2026-04-07 Phase 1 시작 — 프로젝트 초기화 완료

| 항목 | 내용 |
|------|------|
| 소스 프로젝트 | ai_resource_hub + google-ecosystem-map 데이터 분석 완료 |
| 초기화 | CLAUDE.md·CONTEXT.md·RULES.md 재작성, 챗봇 플랜 아카이브 |
| 플랜 작성 | weblist-master.md + phase1-build.md 신규 작성 |
| index.html | 14카테고리 + 즐겨찾기 + 사이드바 리사이즈 구현 |
