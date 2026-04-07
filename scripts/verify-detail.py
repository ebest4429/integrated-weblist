"""
verify-detail.py
소스 파일의 detail 열(✅/🔲)과 JSON detail 필드를 교차 검증한다.

사용법: python scripts/verify-detail.py
출력:
  - 카테고리별 소스 마커 vs JSON detail 수 비교
  - 불일치 항목 경고
  - 전체 진행률 요약
"""

import re, json, os, sys, io

# Windows 콘솔 cp949 → utf-8 강제 (이모지 출력 허용)
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8', errors='replace')

SOURCE_FILES = [
    '.Source-Files/master-source-ai.md',
    '.Source-Files/master-source-dev.md',
    '.Source-Files/master-source-marketing.md',
    '.Source-Files/master-source-creative.md',
    '.Source-Files/master-source-google.md',
]

SECTION_META = {
    'AI 플랫폼·챗봇':         'ai-platforms',
    '이미지·생성 AI':          'image-ai',
    '영상·음성 AI':            'video-audio-ai',
    'MCP·에이전트·자동화':     'mcp-automation',
    '개발 도구·코딩':          'dev-tools',
    '주요 API':               'api',
    '호스팅·배포·인프라':       'hosting-infra',
    '데이터베이스':             'database',
    '마케팅·광고·SEO':         'marketing-seo',
    '결제·핀테크':             'payment',
    '노코드·로우코드·협업':     'nocode-collab',
    '디자인 도구':             'design-tools',
    '이미지 에셋·템플릿':       'image-assets',
    '영상 에셋·템플릿':         'video-assets',
    '사운드 에셋·템플릿':       'sound-assets',
    '구글 AI·생성형':          'google-ai',
    '구글 검색·정보':           'google-search',
    '구글 생산성·워크스페이스':  'google-productivity',
    '구글 미디어·엔터테인먼트':  'google-media',
    '구글 개발자·클라우드':      'google-cloud',
    '구글 광고·비즈니스':       'google-ads',
    '구글 기기·OS':            'google-devices',
    '구글 교육·학습':           'google-education',
    '구글 관리 콘솔':           'google-console',
}

def parse_sections(filepath):
    """소스 파일에서 섹션별 (heading, rows) 파싱"""
    with open(filepath, encoding='utf-8') as f:
        content = f.read()
    sections = re.split(r'^### ', content, flags=re.MULTILINE)
    result = []
    for section in sections[1:]:
        lines = section.strip().split('\n')
        heading = lines[0].strip()
        rows = []
        for line in lines[1:]:
            if not line.startswith('|'):
                continue
            if '---' in line or '서비스명' in line:
                continue
            cols = [c.strip() for c in line.split('|')]
            cols = [c for c in cols if c != '']
            if len(cols) >= 6:
                rows.append({
                    'name': cols[0],
                    'detail_marker': cols[5],
                })
        if rows:
            result.append((heading, rows))
    return result

def load_json_detail_names(file_id):
    """JSON 파일에서 detail 필드가 있는 항목의 name 집합 반환"""
    path = f'src/data/{file_id}.json'
    if not os.path.exists(path):
        return set(), 0
    with open(path, encoding='utf-8') as f:
        data = json.load(f)
    items = data.get('items', [])
    detail_names = {item['name'] for item in items if 'detail' in item}
    return detail_names, len(items)

def main():
    total_items = 0
    total_marked = 0
    total_json_detail = 0
    has_mismatch = False

    col1 = 28
    print(f"\n{'카테고리':<{col1}} {'소스마커':>8}  {'JSON':>8}  {'상태'}")
    print('─' * 58)

    for src_file in SOURCE_FILES:
        if not os.path.exists(src_file):
            print(f'[오류] 파일 없음: {src_file}')
            continue

        sections = parse_sections(src_file)
        for heading, rows in sections:
            # 매핑 찾기
            file_id = None
            for key, fid in SECTION_META.items():
                if key in heading:
                    file_id = fid
                    break
            if not file_id:
                print(f'[경고] 매핑 없음: {heading}')
                continue

            # 소스 마커 집계
            marked_names = {r['name'] for r in rows if '✅' in r['detail_marker']}
            total_count = len(rows)

            # JSON detail 집계
            detail_names, json_total = load_json_detail_names(file_id)
            json_count = len(detail_names)

            total_items += total_count
            total_marked += len(marked_names)
            total_json_detail += json_count

            # 불일치 감지: 소스 ✅인데 JSON에 detail 없는 항목
            missing_in_json = marked_names - detail_names
            # JSON에 detail 있는데 소스 🔲인 항목
            missing_in_source = detail_names - marked_names

            if missing_in_json or missing_in_source:
                has_mismatch = True
                status = '⚠️불일치'
            elif len(marked_names) == total_count and json_count == total_count:
                status = '✅완료'
            elif len(marked_names) == 0:
                status = '🔲미착수'
            else:
                pct = int(len(marked_names) / total_count * 100) if total_count else 0
                status = f'{pct}%'

            # 헤딩에서 이모지 제거
            clean = re.sub(r'^[\U00010000-\U0010ffff\u2000-\u3300\U0001f000-\U0001f9ff✅🔲⚠️]\s*', '', heading).strip()
            print(f'{clean:<{col1}} {len(marked_names)}/{total_count:>5}   {json_count}/{total_count:>5}  {status}')

            if missing_in_json:
                for name in sorted(missing_in_json):
                    print(f'  ⚠️  소스 ✅ 이지만 JSON detail 없음: {name}')
            if missing_in_source:
                for name in sorted(missing_in_source):
                    print(f'  ⚠️  JSON detail 있지만 소스 🔲: {name}')

    print('─' * 58)
    pct_marked = int(total_marked / total_items * 100) if total_items else 0
    pct_json = int(total_json_detail / total_items * 100) if total_items else 0
    print(f'{"합계":<{col1}} {total_marked}/{total_items:>5}   {total_json_detail}/{total_items:>5}')
    print(f'진행률: 소스마커 {pct_marked}%  /  JSON detail {pct_json}%')

    if has_mismatch:
        print('\n⚠️  불일치 항목이 있습니다. 위 경고를 확인하세요.')
        sys.exit(1)
    else:
        print('\n✅ 소스 마커와 JSON detail 일치.')

if __name__ == '__main__':
    main()
