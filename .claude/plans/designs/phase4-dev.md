# Phase 4 — FastAPI 직접 개발 전환

> 참조: `.claude/plans/dev-direction.md`
> 목표: Phase 2·3에서 검증된 로컬 서버를 기반으로 Supabase·Google Sheets·카카오·Railway를 연동하여 실서비스를 완성한다.
> 전제 조건: Phase 3 완료 (완성프롬프트.md 최종 완성, 전체 테스트 통과)
> Phase 2에서 완료된 항목: FastAPI 기본 서버, 매물특징 파일 분기, 모델 환경변수 전환

---

## 작업 항목

### 1. 개발 환경 준비

- 🔲 Python 3.11+ 환경 구성
- 🔲 Phase 2 기반 코드 실서비스용 정리
- 🔲 .env 파일 확인
  - GOOGLE_SHEETS_ID / GOOGLE_CREDENTIALS (Phase 2에서 추가됨)
  - KAKAO_SKILL_SECRET (선택)
- 🔲 프로젝트 구조 정리 (guide_direct_dev.md 참조)

### 2. 구글 시트 연동 — 설정 관리

- 🔲 Google Sheets API 인증 (서비스 계정)
- 🔲 설정 시트 구조 생성
  - [설정] 중개사무소 정보
  - [설정] 톤앤매너
  - [설정] 메시지
- 🔲 서버 기동 시 설정 시트 읽기 구현
- 🔲 설정값을 시스템 프롬프트에 동적 반영

### 3. 인메모리 세션 관리 실서비스 적용

- 🔲 세션 만료 처리 (일정 시간 미응답 시 자동 초기화)
- 🔲 동시 접속 처리 확인 (user_id별 독립 세션)
- 🔲 서버 재시작 시 세션 초기화 동작 확인 (허용 가능 수준)

### 4. AI API 연동 (Phase 2 기반 확장)

- 🔲 Phase 2 모델 연동 코드 → 실서비스용으로 정리
- 🔲 AI_MODEL 환경변수 기반 Gemini ↔ Claude 전환 유지
- 🔲 프롬프트 캐싱 실서비스 적용 확인
- 🔲 대화 히스토리 관리 (토큰 초과 방지 — 단계 완료 시 요약 압축)
- 🔲 카카오 응답 1000자 제한 처리

### 5. 단계별 흐름 로직 구현

- 🔲 flow.py — 완성프롬프트.md 기반 단계 정의
  - 거래당사자별 분기 (매도인 → 2단계-A / 매수인 → 2단계-B)
  - 취소·이전·처음 키워드 처리
  - 입력 오류 처리
- 🔲 5단계 이후 매물별 상세 수집 흐름 구현
- 🔲 최종 단계 — 수집 정보 확인 및 접수 완료 처리

### 6. 구글 시트 연동 — 접수 데이터 기록

- 🔲 접수 완료 시 [데이터] 접수 내역 시트에 행 추가
  - 접수일시 / 거래유형 / 주소(또는 희망조건) / 매물종류 / 희망금액 / 거래시기 / 특이사항 / 성함·연락처 (선택사항, 최종 단계 수집)

### 7. 카카오 Webhook 연동

- 🔲 카카오 i 오픈빌더 채널 개설
- 🔲 스킬 서버 등록 (POST /kakao/webhook)
- 🔲 카카오 요청 JSON 파싱 구현
- 🔲 카카오 응답 JSON 포맷 구현
- 🔲 5초 타임아웃 대응 (응답 속도 최적화)
- 🔲 카카오 채널 연결 및 테스트

### 8. Railway 배포

- 🔲 Railway 프로젝트 생성
- 🔲 환경변수 설정
- 🔲 Procfile 작성 (uvicorn main:app)
- 🔲 배포 및 HTTPS URL 확인
- 🔲 카카오 오픈빌더 webhook URL 등록

### 11. 배포 레포 생성 (최종 작업)

- 🔲 배포용 별도 GitHub 레포 생성 (`chatbot-deploy` 또는 유사 이름)
- 🔲 서비스 파일 복사
  - `app/main.py`
  - `prompts/완성프롬프트.md`
  - `data/property_features/` (10개 파일)
  - `requirements.txt`
  - `run_server.py`
- 🔲 `Procfile` 작성 — `web: uvicorn app.main:app --host 0.0.0.0 --port $PORT`
- 🔲 `.env.example` 작성 (각 중개사 설정 가이드)
- 🔲 `SETUP.md` 작성 — Railway + Gemini API + Google Sheets + 카카오 설치 순서
- 🔲 배포 레포 Railway 연결 + 동작 확인

### 9. 어뷰징 대응

- 🔲 카카오 유저ID 기반 일일 사용 횟수 제한 구현
- 🔲 세션당 최대 턴 수 제한 (예: 30턴 초과 시 자동 종료)
- 🔲 접수 완료 후 쿨다운 적용 (24시간 내 재접수 제한)
- 🔲 AI API 콘솔 월 지출 한도 설정 (Gemini / Anthropic)

### 10. 운영 전 점검

- 🔲 취소/이전/처음 키워드 동작 확인
- 🔲 잘못된 입력 예외 처리 확인
- 🔲 구글 시트 설정 변경 → 즉시 반영 확인
- 🔲 접수 완료 → 구글 시트 자동 기록 확인
- 🔲 카카오 채널 실사용자 테스트

---

## 완료 조건

- [ ] 카카오톡에서 전체 상담 흐름 완주 가능
- [ ] 접수 완료 시 구글 시트 자동 기록
- [ ] 구글 시트 설정 수정 → 재배포 없이 반영
- [ ] Railway 배포 안정 운영 확인
- [ ] 운영 체크리스트 전항목 통과
- [ ] 배포 레포 생성 완료 및 Railway 정상 배포 확인
- [ ] SETUP.md 기준 타 중개사 설치 가능 수준 확인

---

## 참고 문서

- `.Source-Files/guide_direct_dev.md` — 직접 개발 참조 가이드 (코드 예시 포함)
- `.claude/plans/dev-direction.md` — 기술 스택 결정 사유
- `완성프롬프트.md` — system prompt 원본
