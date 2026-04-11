# WORKSPACE.md

> 세션 시작 시 읽는다.
> **기본 읽기**: 현재 위치 + 남은 과제까지.
> **진행 이력**: 필요할 때만 추가 요청.

---

## 현재 위치

| 항목 | 값 |
|------|-----|
| PROJECT | 통합 웹 리소스 허브 |
| 현재 Phase | Phase 5 — CLI 정보 보강 + 가상 필터뷰 |
| 상태 | 플랜 작성 완료 — 구현 시작 전 |
| 현재 플랜 | `.claude/plans/phase5-cli.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |
| 설계 문서 | `.claude/plans/designs/phase5-cli.md` (협의 완료) |

---

## 남은 과제

### Phase 5 작업 순서

**Phase 5 전체 완료 — 2026-04-12**
- P5-1: App.jsx 가상 카테고리 처리·Sidebar.jsx 도구별 보기 그룹·ItemDetail.jsx CLI 섹션 구현 + 커밋
- P5-2: 34개 서비스 CLI 데이터 조사 + 6개 JSON 업데이트 + 커밋
- GitHub Pages 배포 완료 (빌드 경고 없음)

### 보류 — Phase 4에서 이월

- 훅 구조 문제 (protect-phase-transition.js 우회 경로): 추후 해결
- designs/phase2-detail.md 미삭제: Phase 5 완료 후 정리
- master-source ↔ JSON 동기화 미완: Phase 5 완료 후 협의
- Phase 4 완료 후 전체 링크 유효성 검증 여부 협의 필요

---

## 진행 이력

### 2026-04-12 Phase 5 전환 — CLI 정보 보강 + 가상 필터뷰 플랜 수립

| 항목 | 내용 |
|------|------|
| 전환 | WORKSPACE.phase4-api-mcp.md 아카이브 후 새 WORKSPACE.md 작성 |
| 설계 | plans/designs/phase5-cli.md 협의 완료 |
| 플랜 | phase5-cli.md 작성 완료 |
| 방향 | CLI 필드 추가 + 가상 필터뷰(CLI/MCP) 신설. 다중 태그 시스템 등 복잡한 구조 변경 제외. |
