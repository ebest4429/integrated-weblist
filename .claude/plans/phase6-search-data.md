# Phase 6 — 검색 강화 + 신규 데이터 추가

> 작성: 2026-04-15
> 방향: 카테고리 재구조화 없음. 검색 기능 강화 중심. 신규 데이터는 기존 섹션에 통합만.

---

## 목적

- **P6-1 버그 수정**: 사이드바 선택 시 groupFilter 자동 설정 → 검색 범위 제한 버그 제거
- **P6-2 검색 강화**: 검색 UX·범위·표시 방식 개선
- **P6-3 신규 데이터**: 신규추가.md 항목을 기존 섹션에 통합 (카테고리 신설 최소화)

---

## 작업 항목

### P6-1: 검색 버그 수정

- ✅ App.jsx `onSelect`에서 `setGroupFilter([group.id])` → `setGroupFilter([])` 수정
- ✅ 빌드 확인 (경고 없음)
- 🔲 커밋

### P6-2: 검색 강화

> 구조 변경 없이 검색 UX·범위만 개선. 항목별 구현 여부는 협의 후 결정.

- ✅ **검색 범위 토글**: "전체" / "현재 카테고리" 스위치 — 검색바 우측 토글 버튼, 현재 모드는 전체 로드 생략
- 🔲 **검색어 하이라이트**: 결과 항목 name·desc에서 매칭 텍스트 강조 표시
- ✅ **Ctrl+K 단축키**: 검색창 즉시 포커스 (placeholder에 힌트 표시)
- ✅ **검색 결과 카테고리 표시**: 전체 검색 결과에 출처 카테고리 뱃지 표시
- ✅ **빈 결과 안내**: 검색어 있을 때 힌트(범위 변경·철자 확인) + 없을 때 별도 메시지

### P6-3: 신규 데이터 추가

> 기존 섹션 통합만. 카테고리 신설은 항목 수가 충분한 경우에만 협의 후 결정.

#### MCP·에이전트·자동화 섹션 추가

| 서비스 | URL | 상태 |
|--------|-----|------|
| Context7 | context7.com | 🔲 |
| sequential-thinking MCP | github.com/modelcontextprotocol/servers | 🔲 |
| fetch MCP | github.com/modelcontextprotocol/servers | 🔲 |
| Firecrawl MCP | firecrawl.dev | 🔲 |
| Playwright MCP | github.com/microsoft/playwright-mcp | 🔲 |
| 21st.dev Magic MCP | 21st.dev | 🔲 |
| Magic UI MCP | magicui.design | 🔲 |
| shadcn MCP | ui.shadcn.com/docs/mcp | 🔲 |
| YouTube Data MCP | github.com/icraft2170/youtube-data-mcp-server | 🔲 |
| Fiddler MCP | telerik.com/fiddler | 🔲 |
| NotebookLM MCP CLI | github.com/jacob-bd/notebooklm-mcp-cli | 🔲 |
| Gemini MCP 얼티밋 | URL 조사 필요 — 확인 후 추가 | 🔲 |
| Nanobanana API MCP | URL 조사 필요 — 확인 후 추가 | 🔲 |
| image-generation MCP | URL 조사 필요 — 확인 후 추가 | 🔲 |

#### 개발 도구·코딩 섹션 통합

| 서비스 | 비고 | 상태 |
|--------|------|------|
| Node.js | JS 런타임 기준 도구 | 🔲 |
| Next.js | React 프레임워크 | 🔲 |
| React | UI 라이브러리 | 🔲 |
| Vue | UI 프레임워크 | 🔲 |
| Electron | 데스크탑 앱 프레임워크 | 🔲 |
| Anaconda | Python 환경 관리 | 🔲 |
| WSL2 | Windows Linux 환경 | 🔲 |
| Chocolatey | Windows 패키지 매니저 | 🔲 |

> Vite: 현재 이미 사용 중 — JSON 중복 여부 확인 후 결정

#### 기타 섹션

| 서비스 | 대상 섹션 | 상태 |
|--------|----------|------|
| Notion | 노코드·협업 | 🔲 |
| Bitly | 마케팅·광고·SEO | 🔲 |
| GitHub (settings/tokens) | 개발 도구 | 🔲 |

### P6-4: 빌드 + 배포

- 🔲 빌드 경고 없음 확인
- 🔲 GitHub Pages 재배포
- 🔲 master-source 그룹 파일 신규 항목 기록

---

## 완료 조건

- [ ] 검색 버그 수정 커밋 완료
- [ ] P6-2 검색 강화 항목 중 합의된 항목 구현 완료
- [ ] P6-3 신규 데이터 JSON 반영 (URL 확인된 항목만)
- [ ] 빌드 경고 없음
- [ ] GitHub Pages 재배포 완료
