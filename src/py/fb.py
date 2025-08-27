import json

with open('data/2024/cfpicks-66e14-default-rtdb-export.json', 'r') as f:
    data = json.load(f)

for user in data['users'].keys():
    print(user)
    for k,v in data['users'][user].copy().items():
        if k != 'ddd' and k != 'name':
            del data['users'][user][k]
print(data)
data['results'] = {}
data['schedule'] = {}

with open('data/fb2025init.json', 'w') as f:
    json.dump(data,f)