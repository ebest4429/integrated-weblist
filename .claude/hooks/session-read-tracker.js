/**
 * session-read-tracker.js
 * PostToolUse(Read) 훅 — 세션 초기화 게이트 추적
 *
 * 수정 이력:
 *   2026-04-07 — stdin 미수신/파싱 실패 버그 수정
 *                다중 필드명 패턴 대응, 경로 대소문자 무시 비교, 로그 추가
 */

const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '../..');
const GATE = path.join(ROOT, '.claude/.session-gate.json');
const LOG  = path.join(ROOT, '.claude/.tracker.log');

function log(msg) {
  try { fs.appendFileSync(LOG, `[${new Date().toISOString()}] ${msg}\n`); } catch {}
}

const chunks = [];
process.stdin.on('data', c => chunks.push(c));
process.stdin.on('end', () => {
  if (!fs.existsSync(GATE)) return;

  const raw = Buffer.concat(chunks).toString().trim();
  log(`stdin_len=${raw.length}`);

  // stdin이 비어있으면 gate를 직접 확인하는 fallback 사용
  if (!raw) {
    log('stdin empty — skipping (tracker cannot determine which file was read)');
    return;
  }

  let input;
  try {
    input = JSON.parse(raw);
  } catch (e) {
    log(`parse_error: ${e.message} | raw_head: ${raw.slice(0, 100)}`);
    return;
  }

  // Claude Code PostToolUse stdin 필드명 — 버전별 여러 패턴 대응
  const filePath = (input.tool_input   && input.tool_input.file_path)
                || (input.input        && input.input.file_path)
                || (input.parameters   && input.parameters.file_path)
                || input.file_path
                || '';

  log(`fields=${Object.keys(input).join(',')} | filePath="${filePath}"`);
  if (!filePath) return;

  try {
    const gate = JSON.parse(fs.readFileSync(GATE, 'utf8'));
    if (!gate.read) gate.read = [];

    // 대소문자 무시 + 경로 구분자 통일
    const normalize = p => path.resolve(ROOT, p).toLowerCase().replace(/\\/g, '/');
    const readNorm  = normalize(filePath);

    const matched = (gate.required || []).find(r => normalize(r) === readNorm);
    log(`readNorm="${readNorm}" | matched=${matched || 'none'}`);

    if (matched && !gate.read.includes(matched)) {
      gate.read.push(matched);
      log(`read_progress=${gate.read.length}/${gate.required.length}`);

      if (gate.read.length >= gate.required.length) {
        fs.unlinkSync(GATE);
        log('gate_cleared');
      } else {
        fs.writeFileSync(GATE, JSON.stringify(gate, null, 2));
      }
    }
  } catch (e) {
    log(`gate_error: ${e.message}`);
  }
});
