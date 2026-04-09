# 점검 범위 설정

점검 스킬(`/점검-연결`, `/점검-구현`)이 이 파일을 읽어 점검 대상을 파악한다.
점검 전 이 파일을 수정하여 범위를 조정한다.

---

## 기본 점검 대상 (고정)

### .claude/ 루트 설정 파일
- .claude/CLAUDE.md
- .claude/CONTEXT.md
- .claude/RULES.md
- .claude/settings.json
- .claude/WORKSPACE.md
- .claude/hooks/HOOK_GUIDE.md

### 개별 훅 가이드
- .claude/hooks/hooks-guide/ (폴더 전체)

---

## 프로젝트 추가 대상 (점검마다 수정)

### 플랜 폴더
- .claude/plans/

### 추가 파일
# 필요 시 아래에 추가 (주석 해제 또는 직접 입력)
# - .claude/plans/archive/

---

## 구현 점검 대상 (/점검-구현 전용)

### 실제 구현 파일 (Phase 4 기준)
- src/components/ItemRow.jsx
- src/data/ai-platforms.json
- src/data/mcp-automation.json
- src/data/dev-tools.json
- src/data/database.json
- src/data/hosting-infra.json
