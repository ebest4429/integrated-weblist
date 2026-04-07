# WORKSPACE.md

> 세션 시작 시 읽는다.
> **기본 읽기**: 현재 위치 + 남은 과제까지.
> **진행 이력**: 필요할 때만 추가 요청.

---

## 현재 위치

| 항목 | 값 |
|------|-----|
| PROJECT | 통합 웹 리소스 허브 |
| 현재 Phase | Phase 2 — detail 필드 순차 구현 |
| 상태 | 🔄 detail 순차 작성 진행 중 — 8/24 카테고리 완료 (129/338개) |
| 현재 플랜 | `.claude/plans/phase2-detail.md` |
| 전체 플랜 | `.claude/plans/weblist-master.md` |

---

## 남은 과제

### Phase 2 사전 작업

- ✅ P2-1. master-source.md → 그룹별 5개 파일 분리 + 인덱스 전환 완료
  - master-source-ai / dev / marketing / creative / google.md 생성
  - master-source.md → 인덱스 전환
- ✅ P2-2. 각 파일에 detail 상태 열 추가 완료
  - 5개 소스 파일 전체 테이블에 `| detail |` 열 추가, 전 행 🔲 초기화
- ✅ P2-3. scripts/verify-detail.py 작성 완료
  - 24개 카테고리 338개 항목 파싱, 소스 마커↔JSON detail 교차 검증
- ✅ P2-4. gen-json.py detail 파싱 추가 완료
  - split 파일 5개에서 읽기로 전환 (master-source.md 인덱스화로 인한 0 items 수정)
  - 재생성 시 기존 JSON의 nameKo·detail 필드 보존
- ✅ P2-5. ItemRow.jsx 펼침 영역 detail 표시 구현 완료
  - DetailPanel 컴포넌트 추가 (intro·features·usage·notes)
  - detail 없으면 기존 desc+URL 폴백 유지
- ✅ P2-6. CONTEXT.md·RULES.md 데이터 워크플로우 업데이트 완료
  - 데이터 소스 split 파일 구조 반영, detail 작업 흐름 추가

이후: 카테고리별 순차 detail 작성 (세션당 1카테고리, 총 24개)
- 완료: 🤖 AI 플랫폼·챗봇 18/18 (2026-04-08)
- 완료: 🎨 이미지·생성 AI 12/12 (2026-04-08)
- 완료: 🎬 영상·음성 AI 17/17 (2026-04-08)
- 완료: 🧩 MCP·에이전트·자동화 13/13 (2026-04-08)
- 완료: 💻 개발 도구·코딩 24/24 (2026-04-08)
- 완료: 🔌 주요 API 14/14 (2026-04-08)
- 완료: ☁️ 호스팅·배포·인프라 18/18 (2026-04-08)
- 완료: 🗄️ 데이터베이스 13/13 (2026-04-08)
- P2-3. scripts/verify-detail.py 작성
- P2-4. gen-json.py detail 파싱 추가
- P2-5. ItemRow.jsx 펼침 영역 detail 표시 구현
- P2-6. CONTEXT.md·RULES.md 데이터 워크플로우 업데이트

이후 카테고리별 순차 작성 (세션당 1카테고리, 총 24개)

### 보류 — 점검-scope 갱신 문제

취지: /점검-연결 /점검-구현 실행 시 scope.md가 이전 프로젝트 내용으로 잔존하는 문제.
원인 미조사. Phase 2 진행과 별개로 추후 해결.
이슈 문서: `project-init/.Source-Files/점검-scope-갱신-미작동-문제.md`

---

## 진행 이력

### 2026-04-07 Hotfix 완료 — UI 전면 개선 + 훅 구조 수정

| 항목 | 내용 |
|------|------|
| UI 개선 | 다크 테마·Pretendard·헤더 sticky·한글 검색·nameKo 추가 완료 |
| 재배포 | GitHub Pages 재배포 완료 |
| 훅 수정 | hooks/package.json 추가 (CommonJS/ESM 충돌 해결) |
