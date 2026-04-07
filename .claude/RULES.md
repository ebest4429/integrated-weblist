# RULES.md

## 실행 환경

- OS: Windows 10 Pro
- Shell: bash (Git Bash / Claude Code)
- 빌드: `npm run dev` (개발) / `npm run build` (배포 빌드)
- 배포: GitHub Pages — `npm run deploy` (`gh-pages -d dist`)

---

## 개발 원칙

- **데이터 수정 경로**: 서비스 추가·수정은 해당 그룹 `master-source-{그룹}.md` → `python scripts/gen-json.py` → JSON 자동 갱신 순서로만 진행
- **컴포넌트 단위 작업**: 기능 단위로 컴포넌트 분리. `src/components/`에 위치
- **Tailwind 우선**: 스타일은 Tailwind 클래스 우선. 커스텀 CSS는 `App.css`에만 최소 추가
- **중복 제거**: 동일 서비스가 여러 카테고리에 들어가지 않도록 `master-source.md` 기준으로 관리
- **localStorage 키**: `weblist-sidebar-width`, `weblist-favorites` 고정

---

## 절대 금지

1. 플랜에 없는 파일 신규 생성
2. 현재 Phase 범위를 초과한 작업
3. `master-source-{그룹}.md` 거치지 않고 JSON 직접 수동 편집 (gen-json.py로만 갱신)
4. WORKSPACE.md Write 도구로 덮어쓰기 (Edit만 허용)

---

## 플랜 규칙

- 현재 Phase·상태: `WORKSPACE.md`
- 전체 Phase 구조: `weblist-master.md`
- 작업 순서: 플랜 🔲→🔄 → 구현 → 🔄→✅ → WORKSPACE 업데이트 → 커밋

---

## 데이터 워크플로우

```
.Source-Files/master-source-{그룹}.md   ← 서비스 추가·수정·detail 작성 여기서만
        ↓
python scripts/gen-json.py              ← 5개 split 파일 파싱·생성 (nameKo·detail 보존)
        ↓
src/data/*.json                         ← React에서 import하는 실제 데이터
        ↓
python scripts/verify-detail.py         ← 소스 마커↔JSON detail 교차 검증
```

**detail 작업 흐름 (세션당 카테고리 1개):**
1. `python scripts/verify-detail.py` → 현재 완료 상태 확인
2. 해당 그룹 `master-source-{그룹}.md` 열기 → 🔲 카테고리 1개 선택
3. 해당 카테고리 서비스 순차 detail 작성 (JSON 직접 편집)
4. `master-source-{그룹}.md` detail 열 🔲 → ✅ 마킹
5. `python scripts/verify-detail.py` → 완료 검증
6. 커밋

---

## plans/ vs designs/ 구분

| 위치 | 의미 | 활성 플랜 가능 여부 |
|------|------|------------------|
| `.claude/plans/` | 활성 중 또는 완료된 페이지플랜 | ✅ |
| `.claude/plans/designs/` | 아직 활성화되지 않은 사전설계 | ❌ |
