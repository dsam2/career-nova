with open('career-nova-export/index.html', 'r', encoding='utf-8') as f:
    text = f.read()

import re
matches = re.finditer(r'lh02uz', text)
for m in matches:
    pos = m.start()
    print("Match in index.html:", text[max(0, pos-100):min(len(text), pos+400)])
