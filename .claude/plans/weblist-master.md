# 통합 웹 리소스 허브 — 마스터플랜

**현재 활성 플랜:** `phase1-build.md`

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
| Phase 1 | 초기화 + 단일 HTML 구축 | `phase1-build.md` | 🔄 진행중 |
| Phase 2 | Vite + Vue 이관 (선택) | *(사전설계: `designs/phase2-vue.md`)* | 🔲 대기 |

---

## Phase 1 완료 조건

- [ ] .claude 설정 파일 초기화 완료 (CLAUDE.md, CONTEXT.md, RULES.md)
- [ ] weblist-master.md + phase1-build.md 작성 완료
- [ ] WORKSPACE.md 초기화 완료
- [ ] index.html 구현 완료
  - [ ] 사이드바 리사이즈 동작
  - [ ] 14개 카테고리 + 즐겨찾기
  - [ ] 검색 기능 동작
  - [ ] 두 소스 프로젝트 데이터 전체 포함
  - [ ] 소스.md 추가 항목 포함
  - [ ] LocalStorage 즐겨찾기 유지

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
