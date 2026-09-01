import json
from collections import defaultdict

with open("c:/Users/plaisancem/Downloads/cfpicks-66e14-default-rtdb-export (1).json", 'r', encoding='utf-8') as f:
    data = json.load(f)
res = defaultdict(lambda: defaultdict(dict))
for user in data['users']:
    ddd = data['users'][user].get('ddd','')
    name = data['users'][user].get('name','')
    res['users'][user]['ddd'] = ddd
    res['users'][user]['name'] = name

res['schedule'] = {}
res['results'] = {}
with open('data/2026_init.json', 'w', encoding='utf-8') as f:
    json.dump(res, f, indent=2)