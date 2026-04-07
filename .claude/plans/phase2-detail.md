# Phase 2 — detail 필드 순차 구현

> 사전설계: `plans/designs/phase2-detail.md` 참조하여 활성화.
> Phase 1 + Hotfix UI 완료 후 진입.

---

## 목표

서비스 허브 각 항목의 펼침 영역에 상세 정보(소개·주요기능·사용법·기타)를 추가한다.
카테고리별 순차 구현 + 검증 시스템으로 누락 없이 완성한다.

---

## 배경 결정사항

| 항목 | 결정 내용 |
|------|---------|
| detail 필드 성격 | optional — 없는 서비스는 기존 desc만 표시 (하위 호환). 취지: 338개 전체를 한번에 채우는 것은 비현실적, 미완료 카테고리도 기존 desc로 정상 동작 |
| 작업 단위 | 세션당 카테고리 1개 (10~24개 서비스). 취지: AI 생략 방지, 집중도 유지 |
| 소스 파일 분리 | master-source.md → 그룹별 5개 파일 분리. 취지: 단일 파일 338개는 컨텍스트 낭비, 그룹별로 분리하여 세션당 필요한 파일만 로드 |
| 검증 방식 | verify-detail.py 스크립트 + master-source 완료 마커 열. 취지: 실제 JSON과 소스 파일 상태를 교차 검증하여 누락 방지 |

---

## 파일 분리 계획

```
.Source-Files/
├── master-source.md              ← 인덱스 (그룹별 링크 + 전체 현황 요약)
├── master-source-ai.md           ← AI 관련 (4카테고리 60개)
├── master-source-dev.md          ← 개발 관련 (4카테고리 69개)
├── master-source-marketing.md    ← 마케팅·비즈니스 (3카테고리 47개)
├── master-source-creative.md     ← 크리에이티브 (4카테고리 42개)
└── master-source-google.md       ← 구글 생태계 (9카테고리 120개)
```

---

## JSON 스키마

```json
{
  "name": "ChatGPT",
  "url": "https://chat.openai.com",
  "desc": "1줄 요약",
  "badge": "freepaid",
  "detail": {
    "intro": "서비스 소개 (2~3줄)",
    "features": ["주요기능1", "주요기능2", "주요기능3"],
    "usage": "사용법 설명",
    "notes": "기타 메모 (선택)"
  }
}
```

---

## 세션 작업 흐름

```
1. python scripts/verify-detail.py  →  현재 완료 상태 확인
2. master-source-{그룹}.md 열기     →  🔲 카테고리 1개 선택
3. 해당 카테고리 서비스 순차 detail 작성
4. master-source detail 열 ✅ 마킹
5. python scripts/gen-json.py       →  JSON 반영
6. python scripts/verify-detail.py  →  완료 검증
7. 커밋
```

---

## 작업 항목

### 사전 작업

- ✅ P2-1. master-source.md → 그룹별 5개 파일 분리 + 인덱스 전환
- ✅ P2-2. 각 파일에 detail 상태 열 추가
- ✅ P2-3. scripts/verify-detail.py 작성
- ✅ P2-4. gen-json.py detail 파싱 추가
- ✅ P2-5. ItemRow.jsx 펼침 영역 detail 표시 구현
- ✅ P2-6. CONTEXT.md·RULES.md 데이터 워크플로우 업데이트

### 카테고리별 순차 작성

**그룹: AI 관련** (`master-source-ai.md`)
- ✅ 🤖 AI 플랫폼·챗봇 (18개)
- ✅ 🎨 이미지·생성 AI (12개)
- ✅ 🎬 영상·음성 AI (17개)
- ✅ 🧩 MCP·에이전트·자동화 (13개)

**그룹: 개발 관련** (`master-source-dev.md`)
- ✅ 💻 개발 도구·코딩 (24개)
- ✅ 🔌 주요 API (14개)
- 🔲 ☁️ 호스팅·배포·인프라 (18개)
- 🔲 🗄️ 데이터베이스 (13개)

**그룹: 마케팅·비즈니스** (`master-source-marketing.md`)
- 🔲 📣 마케팅·광고·SEO (21개)
- 🔲 💳 결제·핀테크 (13개)
- 🔲 🛠️ 노코드·로우코드·협업 (13개)

**그룹: 크리에이티브** (`master-source-creative.md`)
- 🔲 🎨 디자인 도구 (8개)
- 🔲 🖼️ 이미지 에셋·템플릿 (10개)
- 🔲 🎞️ 영상 에셋·템플릿 (12개)
- 🔲 🎵 사운드 에셋·템플릿 (12개)

**그룹: 구글 생태계** (`master-source-google.md`)
- 🔲 ✨ 구글 AI·생성형 (12개)
- 🔲 🔍 구글 검색·정보 (16개)
- 🔲 💼 구글 생산성·워크스페이스 (16개)
- 🔲 🎬 구글 미디어·엔터테인먼트 (13개)
- 🔲 ☁️ 구글 개발자·클라우드 (17개)
- 🔲 📊 구글 광고·비즈니스 (12개)
- 🔲 📱 구글 기기·OS (12개)
- 🔲 🎓 구글 교육·학습 (10개)
- 🔲 🖥️ 구글 관리 콘솔 (12개)

---

## 완료 조건

- [ ] 전체 338개 서비스 detail 필드 작성 완료
- [ ] verify-detail.py 전 카테고리 100% 출력
- [ ] ItemRow 펼침 영역 detail 정상 표시 확인
- [ ] GitHub Pages 재배포 완료
