# RULES.md

## 실행 환경

- OS: Windows 10 Pro
- Shell: bash (Git Bash / Claude Code 기준)
- 결과물: 단일 index.html (빌드 도구 없음)

---

## 개발 원칙

- **단일 파일 원칙**: index.html 하나로 모든 기능 구현. 별도 CSS/JS 파일 분리 금지 (현재 Phase)
- **데이터 인라인**: SECTIONS 배열은 HTML 내 `<script>` 태그에 직접 선언
- **재분류 원칙**: 두 소스 프로젝트(ai_resource_hub, google-ecosystem-map)의 데이터를 새 카테고리 기준으로 재분류
- **중복 제거**: 두 소스에서 동일 서비스가 중복될 경우 한 곳에만 배치
- **신규 항목**: .Source-Files/소스.md에 명시된 항목만 추가 (임의 추가 금지)

---

## 절대 금지

1. 플랜에 없는 파일 신규 생성
2. 현재 Phase 범위를 초과한 작업
3. 빌드 도구(webpack, vite 등) 설정 파일 생성 — Phase 2 이후 결정
4. 카테고리 구조 임의 변경 (CONTEXT.md의 카테고리 표 기준)

---

## 플랜 규칙

- 현재 Phase와 플랜은 `WORKSPACE.md`에서 확인
- 전체 Phase 구조는 `weblist-master.md`에서 확인
- 파일 수정 전 WORKSPACE.md + 현재 페이지 플랜 확인 필수
- 완료된 체크박스 즉시 업데이트

## plans/ vs designs/ 구분

| 위치 | 의미 | 활성 플랜 가능 여부 |
|------|------|------------------|
| `.claude/plans/` | 활성 중 또는 완료된 페이지플랜 | ✅ |
| `.claude/plans/designs/` | 아직 활성화되지 않은 사전설계 | ❌ |
