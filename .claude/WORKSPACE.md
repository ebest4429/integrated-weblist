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

### Hotfix UI — 다음 세션 이어서

- 텍스트 컬러 화이트 완전 적용 확인 (설명 15px #ffffff)
- 사이드바 리사이즈 동작 확인 (App.css import 수정 완료, 실기기 검증 필요)
- 아이템 레이아웃 밸런스 최종 확인
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
