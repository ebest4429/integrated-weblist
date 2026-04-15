# 통합 웹 리소스 허브 — 마스터플랜

**현재 활성 플랜:** `phase6-search-data.md`

> 참조 소스: `ai_resource_hub/index.html`, `google-ecosystem-map/index.html`, `.Source-Files/소스.md`

---

## 구현 방향 (고정)

| 단계 | 형태 | 비고 |
|------|------|------|
| **Phase 1** | 단일 HTML 파일 | 현재 — 사이드바 + 전체 데이터 통합 |
| **Phase 2** | Vite + Vue 3 이관 | 데이터 증가 시 검토 |
| **Phase 3** | 검색 고도화 + 태그 필터 | 사용 데이터 확보 후 |

---

## 전체 Phase 구조

| Phase | 이름 | 플랜 파일 | 상태 |
|-------|------|----------|------|
| Phase 1 | 초기화 + Vite+React 구축 | `phase1-build.md` | ✅ 완료 |
| Phase 2 | detail 필드 순차 구현 | `phase2-detail.md` | ✅ 완료 |
| Phase 3 | 검색 고도화 + 태그 필터 | `phase3-search-filter.md` | ✅ 완료 |
| Phase 4 | API·MCP 정보 보강 | `phase4-api-mcp.md` | ✅ 완료 |
| Phase 5 | CLI 정보 보강 + 가상 필터뷰 | `phase5-cli.md` | ✅ 완료 |
| Phase 6 | 검색 강화 + 신규 데이터 추가 | `phase6-search-data.md` | 🔄 진행 중 |

---

## Phase 1 완료 조건

- [x] .claude 설정 파일 초기화 완료 (CLAUDE.md, CONTEXT.md, RULES.md)
- [x] weblist-master.md + phase1-build.md 작성 완료
- [x] WORKSPACE.md 초기화 완료
- [x] Vite + React + Tailwind 앱 구현 완료
  - [x] 사이드바 드래그 리사이즈 동작 (180~400px)
  - [x] 24개 카테고리 + 즐겨찾기 (5그룹 구조)
  - [x] 검색 기능 동작 (name+desc 실시간 필터링)
  - [x] 338개 서비스 데이터 전체 포함 (24개 JSON)
  - [x] 소스.md 추가 항목 반영
  - [x] LocalStorage 즐겨찾기·사이드바 너비 유지
- [x] GitHub Pages 실제 배포 완료 (`npm run deploy` 실행)

---

## Phase 2 완료 조건

- [x] 전체 338개 서비스 detail 필드 작성 완료 (24/24 카테고리)
- [x] verify-detail.py 전 카테고리 100% 출력 확인
- [x] ItemRow 펼침 영역 detail 정상 표시 확인
- [x] GitHub Pages 재배포 완료 (2026-04-08)

---

## 결정사항 기록

| 날짜 | 항목 | 결정 내용 |
|------|------|---------|
| 2026-04-07 | 프로젝트 시작 | 통합 웹 리소스 허브 초기화 |
| 2026-04-07 | 기술 스택 확정 | **Vite + React + Tailwind CSS** — 범용성·AI보조·생태계 우위. Vue3/Next.js 제외. 취지: React 경험 있음, 링크 지속 증가 예정, 장기 관리 목적 |
| 2026-04-07 | 단일 HTML 폐기 | 빌드형으로 전환. 취지: 항목 지속 추가 예정이므로 데이터와 UI 분리 필수 |
| 2026-04-07 | 데이터 구조 | `src/data/` 카테고리별 JSON 파일. 새 링크 추가 = JSON 한 줄 추가 |
| 2026-04-07 | 네비게이션 | **좌측 사이드바 + 그룹핑** (카테고리 30개 이상 대응). 상단 아코디언 제외. 취지: 섹션 많을수록 사이드바가 스캔 효율 우위 |
| 2026-04-07 | 항목 표시 방식 | **리스트 + 인라인 아코디언** 확정. 취지: 250개+ 항목 스캔 효율, 카드 그리드보다 정보 밀도 우위 |
| 2026-04-07 | 항목 상세 구조 | 기본: 이름·1줄요약·뱃지·링크. 펼침: 소개·주요기능·사용법·기타 (JSON detail 필드) |
| 2026-04-07 | 사이드바 그룹 | AI관련 / 개발관련 / 마케팅·비즈니스 / 크리에이티브 / 구글생태계 — 그룹별 접기/펼치기 |
| 2026-04-07 | 배포 | GitHub Pages (정적 빌드 `vite build`) |
| 2026-04-07 | 데이터 출처 | ai_resource_hub + google-ecosystem-map 전체 + 소스.md 추가 항목 |
| 2026-04-07 | detail 필드 구현 | 펼침 상세(소개·주요기능·사용법·기타)를 순차 구현으로 확정. 취지: 338개 전체를 한번에 채우는 것은 비현실적이나, 카테고리별 순차 작성으로 완료된 것부터 기준점 삼아 누적 진행. optional 필드로 설계하여 미완료 카테고리도 기존 desc로 정상 동작. |
| 2026-04-11 | api_docs·dashboard 링크 검증 | 구현은 완료. 전체 링크 유효성 검증은 Phase 4 완료 후 협의하여 결정. 취지: 검증 작업량이 크므로 MCP 구현 완료 후 필요성 판단. 당장 할 일 없음 — 페이지 플랜에 기록 금지. |

---

## 다음 세션 시작 지점

> 플랜·방향 협의 완료. 다음 세션에서 바로 구현 시작 가능.

**다음 세션 작업 순서:**
1. Vite + React + Tailwind 프로젝트 초기화
2. 디렉토리 구조 잡기
3. 사이드바 컴포넌트 구현
4. JSON 데이터 파일 작성 (카테고리별)
5. 리스트 + 아코디언 카드 컴포넌트
6. 검색·필터 기능
7. 즐겨찾기 (localStorage)

**참고 — 컴포넌트 구조 초안:**
```
src/
├─ data/
│   ├─ ai-platforms.json
│   ├─ image-ai.json
│   └─ ...
├─ components/
│   ├─ Sidebar.jsx
│   ├─ SidebarGroup.jsx
│   ├─ ItemList.jsx
│   ├─ ItemRow.jsx        ← 기본 리스트 행
│   └─ ItemDetail.jsx     ← 아코디언 펼침 상세
└─ App.jsx
```
