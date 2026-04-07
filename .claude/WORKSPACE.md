# WORKSPACE.md

> 세션 시작 시 읽는다.
> **기본 읽기**: 현재 위치 + 남은 과제까지.
> **진행 이력**: 필요할 때만 추가 요청.

---

## 현재 위치

| 항목 | 값 |
|------|-----|
| PROJECT | 통합 웹 리소스 허브 |
| 현재 Phase | Hotfix — UI 전면 개선 |
| 상태 | ✅ 완료 — UI 전면 개선 + 재배포 완료 |
| 현재 플랜 | `.claude/plans/hotfix-2026-04-07-ui-overhaul.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |

---

## 남은 과제

### 🔴 최우선 — session-read-tracker 검증 (다음 세션 시작 직후)

세션 시작 후 3개 파일 Read → `.claude/.tracker.log` 생성 여부 확인:

- `stdin_len=0` 이면 → stdin 자체가 안 옴 → 트래킹 방식 근본 재설계 필요
- `stdin_len>0` + `matched=none` 이면 → 경로 비교 문제 → normalize 추가 조정
- `gate_cleared` 이면 → 정상 작동 확인 완료

보고서 위치: `c:/Users/admin/Project/Main-Project/project-init/.Source-Files/tracker-bug-report-20260407.md`

### Hotfix UI — 다음 세션 이어서

- `npm run dev`로 실기기 확인 (텍스트 화이트 #ffffff, 리사이즈, 레이아웃)
- 이상 없으면 `npm run deploy` 재배포

### Phase 2 — 사전설계 완료, 대기 중

사전설계: `.claude/plans/designs/phase2-detail.md`

**핵심 내용:**
- master-source.md → 그룹별 5개 파일 분리 (AI 생략 방지)
- detail 필드 optional 추가 (소개·주요기능·사용법·기타)
- verify-detail.py 검증 스크립트 도입
- 카테고리 1개씩 순차 구현 (세션당 10~24개)

Phase 1 완료 후 전환 절차 거쳐 활성화

---

## 진행 이력

### 2026-04-07 Phase 1 시작 — 프로젝트 초기화 완료

| 항목 | 내용 |
|------|------|
| 소스 프로젝트 | ai_resource_hub + google-ecosystem-map 데이터 분석 완료 |
| 초기화 | CLAUDE.md·CONTEXT.md·RULES.md 재작성, 챗봇 플랜 아카이브 |
| 플랜 작성 | weblist-master.md + phase1-build.md 신규 작성 |
| index.html | 14카테고리 + 즐겨찾기 + 사이드바 리사이즈 구현 |
