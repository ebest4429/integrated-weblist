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
| 상태 | ✅ 완료 — UI 전면 개선 + 재배포 + 훅 구조 수정 완료 |
| 현재 플랜 | `.claude/plans/hotfix-2026-04-07-ui-overhaul.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |

---

## 남은 과제

### Hotfix UI — 다음 세션 이어서

- `npm run dev`로 실기기 확인 (텍스트 화이트 #ffffff, 리사이즈, 레이아웃)
- 이상 없으면 `npm run deploy` 재배포

### 훅 구조 수정 — 완료

- 원인: `package.json` `"type":"module"` → hooks 디렉토리 CommonJS/ESM 충돌
- 수정: `.claude/hooks/package.json` (`{"type":"commonjs"}`) 추가 — 현재 프로젝트 + 템플릿
- 결과: `gate_cleared` 정상 확인 (`.tracker.log` 생성 확인)
- 이슈 문서: `project-init/.Source-Files/훅-CommonJS-ESM-충돌-문제.md`

### 점검-scope 갱신 문제 — 별도 이슈로 분리

- /점검-연결 /점검-구현 실행 시 scope.md가 이전 프로젝트 내용으로 잔존하는 문제
- 원인 미조사, 추후 해결
- 이슈 문서: `project-init/.Source-Files/점검-scope-갱신-미작동-문제.md`

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
