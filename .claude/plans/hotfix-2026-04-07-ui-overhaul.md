# Hotfix — UI 전면 개선

> Phase 1 완료 후 UI 품질 개선 요청. Phase 2(detail 필드) 진입 전 처리.

---

## 작업 항목

### 1. 다크 테마 + Pretendard 폰트
- ✅ index.html: `class="dark"` 추가 + Pretendard CDN 로드
- ✅ index.css: font-family Pretendard 전역 설정
- ✅ App.css: 스크롤바 다크 고정, 리사이즈 핸들 개선
- ✅ 모든 컴포넌트 색상 — 짙은 회색 다크 팔레트 적용
  - 메인 bg: `#15161b`, 사이드바: `#1c1d24`, 카드: `#1e1f28`

### 2. 레이아웃 구조 변경
- ✅ 검색창 사이드바에서 메인 헤더로 이동 (중앙 배치)
- ✅ 메인 헤더 sticky — 그룹명 + 섹션명 항상 표시
- ✅ 헤더 높이 현재보다 약간 증가
- ✅ App.jsx: 그룹 정보(groupLabel) 계산해서 ItemList에 전달
- ✅ Sidebar.jsx: 검색 제거, 상단 타이틀만 유지

### 3. ItemRow — 한글 서비스명 표시
- ✅ nameKo 필드 있을 경우 영문명 아래에 소형 표시
- ✅ 검색 로직에 nameKo 포함 (한글 검색 지원)

### 4. JSON 데이터 — nameKo 추가
> 보편적으로 알려진 서비스에만 한글명 추가. 어색한 것은 영문 유지.
- ✅ ai-platforms.json: ChatGPT, Hugging Face, NotebookLM 등
- ✅ image-ai.json: Midjourney, Stable Diffusion 등
- ✅ video-audio-ai.json: Sora, ElevenLabs 등
- ✅ dev-tools.json: GitHub Copilot, VS Code, Docker, Flutter, TensorFlow 등
- ✅ hosting-infra.json: Firebase, AWS 등
- ✅ database.json: BigQuery, Redis 등
- ✅ google-*.json (9개): 구글 서비스 전반 한글명 (총 115개 추가)

---

## 완료 조건

- [ ] 다크 배경 — 순수 블랙이 아닌 짙은 회색 계열
- [ ] 전체 폰트 Pretendard 적용
- [ ] 상단 헤더 sticky — 그룹명 > 섹션명 + 검색창 중앙 배치
- [ ] 사이드바에 검색창 없음
- [ ] 한글 검색 동작 확인 (예: "유튜브", "구글 드라이브")
- [ ] GitHub Pages 재배포 완료
