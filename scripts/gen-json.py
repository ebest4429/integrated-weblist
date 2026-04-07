"""
gen-json.py
소스 파일(.Source-Files/master-source-*.md)을 읽어 src/data/*.json 을 생성한다.

변경 이력:
- Phase 1: master-source.md 단일 파일 읽기
- Phase 2 (P2-4, 2026-04-08): 그룹별 5개 split 파일 읽기로 전환.
  취지: master-source.md가 인덱스로 전환되어 단일 파일 읽기 방식이 동작 불가.
  추가: 재생성 시 기존 JSON의 detail·nameKo 필드 보존 (작성된 상세 데이터 유실 방지).
"""

import re, json, os

SOURCE_FILES = [
    '.Source-Files/master-source-ai.md',
    '.Source-Files/master-source-dev.md',
    '.Source-Files/master-source-marketing.md',
    '.Source-Files/master-source-creative.md',
    '.Source-Files/master-source-google.md',
]

badge_map = {
    '무료+유료': 'freepaid', '무료': 'free', '유료': 'paid',
    '오픈소스': 'open', '실험적': 'exp', 'Deprecated': 'dep',
}

section_meta = {
    'AI 플랫폼·챗봇':         ('ai-platforms',        'ai',        '🤖'),
    '이미지·생성 AI':          ('image-ai',            'ai',        '🎨'),
    '영상·음성 AI':            ('video-audio-ai',      'ai',        '🎬'),
    'MCP·에이전트·자동화':     ('mcp-automation',      'ai',        '🧩'),
    '개발 도구·코딩':          ('dev-tools',           'dev',       '💻'),
    '주요 API':               ('api',                 'dev',       '🔌'),
    '호스팅·배포·인프라':       ('hosting-infra',       'dev',       '☁️'),
    '데이터베이스':             ('database',            'dev',       '🗄️'),
    '마케팅·광고·SEO':         ('marketing-seo',       'marketing', '📣'),
    '결제·핀테크':             ('payment',             'marketing', '💳'),
    '노코드·로우코드·협업':     ('nocode-collab',       'marketing', '🛠️'),
    '디자인 도구':             ('design-tools',        'creative',  '🎨'),
    '이미지 에셋·템플릿':       ('image-assets',        'creative',  '🖼️'),
    '영상 에셋·템플릿':         ('video-assets',        'creative',  '🎞️'),
    '사운드 에셋·템플릿':       ('sound-assets',        'creative',  '🎵'),
    '구글 AI·생성형':          ('google-ai',           'google',    '✨'),
    '구글 검색·정보':           ('google-search',       'google',    '🔍'),
    '구글 생산성·워크스페이스':  ('google-productivity', 'google',    '💼'),
    '구글 미디어·엔터테인먼트':  ('google-media',        'google',    '🎬'),
    '구글 개발자·클라우드':      ('google-cloud',        'google',    '☁️'),
    '구글 광고·비즈니스':       ('google-ads',          'google',    '📊'),
    '구글 기기·OS':            ('google-devices',      'google',    '📱'),
    '구글 교육·학습':           ('google-education',    'google',    '🎓'),
    '구글 관리 콘솔':           ('google-console',      'google',    '🖥️'),
}


def load_existing_extras(file_id):
    """기존 JSON에서 name → {nameKo, detail} 매핑 반환 (보존용)"""
    path = f'src/data/{file_id}.json'
    extras = {}
    if not os.path.exists(path):
        return extras
    with open(path, encoding='utf-8') as f:
        data = json.load(f)
    for item in data.get('items', []):
        name = item.get('name', '')
        entry = {}
        if 'nameKo' in item:
            entry['nameKo'] = item['nameKo']
        if 'detail' in item:
            entry['detail'] = item['detail']
        if entry:
            extras[name] = entry
    return extras


results = {}

for src_file in SOURCE_FILES:
    if not os.path.exists(src_file):
        print(f'[경고] 파일 없음: {src_file}')
        continue

    with open(src_file, encoding='utf-8') as f:
        content = f.read()

    sections = re.split(r'^### ', content, flags=re.MULTILINE)

    for section in sections[1:]:
        lines = section.strip().split('\n')
        heading = lines[0].strip()

        meta = None
        for key, val in section_meta.items():
            if key in heading:
                meta = val
                break
        if not meta:
            continue

        file_id, group, icon = meta
        extras = load_existing_extras(file_id)
        items = []

        for line in lines[1:]:
            if not line.startswith('|'):
                continue
            if '---' in line or '서비스명' in line:
                continue
            cols = [c.strip() for c in line.split('|')[1:-1]]
            if len(cols) < 4:
                continue
            name, url, desc = cols[0], cols[1], cols[2]
            badge_kor = cols[3]
            badge = badge_map.get(badge_kor, 'free')
            if not name or not url:
                continue

            item = {'name': name, 'url': url, 'desc': desc, 'badge': badge}
            # 기존 nameKo·detail 보존
            if name in extras:
                if 'nameKo' in extras[name]:
                    item['nameKo'] = extras[name]['nameKo']
                if 'detail' in extras[name]:
                    item['detail'] = extras[name]['detail']

            items.append(item)

        # title: 앞의 이모지 제거
        title_clean = re.sub(
            r'^[\U00010000-\U0010ffff\u2000-\u3300\U0001f000-\U0001f9ff]\s*', '',
            heading
        ).strip()

        results[file_id] = {
            'id': file_id,
            'icon': icon,
            'title': title_clean,
            'group': group,
            'items': items,
        }

os.makedirs('src/data', exist_ok=True)
for file_id, data in results.items():
    path = f'src/data/{file_id}.json'
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f'OK {path} ({len(data["items"])} items)')

print(f'\nTotal: {len(results)} files, {sum(len(d["items"]) for d in results.values())} items')
