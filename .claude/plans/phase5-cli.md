# Phase 5 — CLI 정보 보강 + 가상 필터뷰

> 설계 근거: `.claude/plans/designs/phase5-cli.md` (협의 완료)
> 작성: 2026-04-12

---

## 목적

각 서비스의 CLI 도구 정보(설치·명령어·문서)를 `cli` 필드로 추가하고,
사이드바에 가상 필터뷰(CLI 도구 / MCP 연결)를 신설하여
사용자가 도구 유형별 서비스를 한눈에 찾을 수 있도록 한다.

---

## CLI 필드 정의

### 스키마

```json
"cli": {
  "install_win": "winget install PostgreSQL.PostgreSQL",
  "install_mac": "brew install postgresql",
  "commands": [
    { "label": "연결", "code": "psql -U postgres -h HOST -d DBNAME" },
    { "label": "쿼리 실행", "code": "psql -c \"SELECT version();\"" }
  ],
  "info_url": "https://www.postgresql.org/docs/current/app-psql.html"
}
```

| 서브필드 | 설명 | 필수 여부 |
|---------|------|---------|
| `install_win` | Windows 설치 명령 (winget 또는 공식 인스톨러 링크) | 하나 이상 필수 |
| `install_mac` | macOS 설치 명령 (brew) | 선택 |
| `commands` | 주요 명령어 배열 — label + code 쌍 | 하나 이상 필수 |
| `info_url` | 공식 CLI 문서 링크 | 선택 |

### CLI 포함 기준

1. **공식 CLI 우선** 포함
2. **서드파티**: 보편적 활용도(GitHub Star·다운로드 빈도·커뮤니티 사용) 기준 선별
   - 대상이 소수 → 전부 포함
   - 대상이 다수 → 안정성·빈도 낮은 것 제외
3. **Windows 기준 필수**, macOS는 있으면 추가
4. install_win 또는 install_mac 하나 이상 + commands 하나 이상 없으면 필드 생략

### 조사 방법

1. 서비스 공식 문서에서 CLI 또는 설치 가이드 확인
2. GitHub 공식 저장소에서 CLI 관련 내용 확인
3. winget 패키지 존재 여부 확인 (`winget search <서비스명>`)
4. 위 단계에서 확인 불가 → cli 필드 없음 처리 (빈 값 입력 금지)

---

## 가상 필터뷰 설계

### 개념

```
기존 카테고리: JSON 파일 기반 (변경 없음)
가상 뷰 (신규):
  "CLI 도구"  → 전체 JSON에서 cli 필드 있는 서비스 동적 수집
  "MCP 연결"  → 전체 JSON에서 mcp 필드 있는 서비스 동적 수집
```

- 기존 카테고리 구조 변경 없음
- 사이드바 최하단 별도 그룹("도구별 보기")으로 추가
- 카드 표시 방식: 기존과 동일

### 사이드바 구조 (안)

```
[기존 5개 그룹 — 변경 없음]

─────────────
도구별 보기
  🔌 MCP 연결
  💻 CLI 도구
```

---

## UI 변경 범위

| 파일 | 변경 내용 |
|------|---------|
| `App.jsx` | 가상 카테고리 처리 로직 추가 (전체 JSON 수집 + 필드 필터) |
| `Sidebar.jsx` | "도구별 보기" 그룹 + 가상 뷰 항목 2개 추가 |
| `ItemDetail.jsx` | CLI 섹션 추가 (MCP 섹션 패턴 재사용, CopyButton 재사용) |

---

## 작업 항목

### 1단계: UI 구현 (P5-1)

- [ ] App.jsx 가상 카테고리 처리 로직 추가
- [ ] Sidebar.jsx "도구별 보기" 그룹 추가 (MCP 연결 + CLI 도구)
- [ ] ItemDetail.jsx CLI 섹션 추가
- [ ] 빌드 확인 (npm run build)
- [ ] 커밋

### 2단계: CLI 데이터 조사 + 구현 (P5-2)

> 조사 범위: 전체 서비스(338개) + 현재 목록에 없는 CLI 특화 서비스
> 조사 결과 서비스 수에 따라: 소수 → 단일 조사 파일 / 다수 → 카테고리별 파일

- [ ] 전체 서비스 CLI 보유 여부 전수 조사 (조사 파일 작성)
- [ ] 기존 서비스 cli 필드 추가 (해당 JSON 업데이트)
- [ ] 신규 CLI 서비스 항목 추가 (소수 예상)
- [ ] 빌드 확인
- [ ] 커밋 + 배포 + 샘플 검증

---

## 완료 조건

- [ ] P5-1 UI 구현 완료 (가상 필터뷰 동작 확인)
- [ ] MCP 연결 가상 뷰 정상 동작 확인 (기존 데이터 활용)
- [ ] CLI 도구 가상 뷰 정상 동작 확인
- [ ] CLI 데이터 조사 완료 + JSON 업데이트
- [ ] 빌드 경고 없음
- [ ] GitHub Pages 재배포 완료
