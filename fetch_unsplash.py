import urllib.request
import json

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

queries = [
    'indian college student',
    'indian university students',
    'indian graduate student graduation',
    'indian students classroom studying',
    'counselling mentoring student'
]

results = {}
for q in queries:
    url = f"https://unsplash.com/napi/search/photos?query={urllib.parse.quote(q)}&per_page=6"
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            results[q] = [
                {
                    'id': p['id'],
                    'desc': p.get('alt_description') or p.get('description'),
                    'url_regular': p['urls']['regular'],
                    'url_small': p['urls']['small']
                }
                for p in data.get('results', [])
            ]
            print(f"Found {len(results[q])} photos for '{q}'")
    except Exception as e:
        print(f"Error for '{q}': {e}")

with open('unsplash_photos.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, indent=2)

print("Saved unsplash_photos.json")
