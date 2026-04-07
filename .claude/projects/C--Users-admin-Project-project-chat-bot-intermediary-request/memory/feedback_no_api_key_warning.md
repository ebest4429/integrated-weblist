---
name: API 키 노출 경고 금지
description: 이 프로젝트에서 .env 키 노출에 대한 경고를 하지 말 것
type: feedback
---

API 키 노출 경고를 반복하지 말 것.

**Why:** 모든 레포가 Private이고, 개발 완료 후 전면 키 교체 예정. 배포 레포도 각 중개사 개별 키 사용 구조. 사용자가 이 정책을 명시적으로 확인했으며 매번 경고를 원하지 않음.

**How to apply:** `.env`, Railway 환경변수, 코드 내 키 노출을 발견해도 경고 없이 진행. 키 교체는 phase4-dev.md item 10에 작업 항목으로 등록되어 있음.
