import json

with open('data/fbData.json', 'r') as f:
    data = json.load(f)
for user in data['users'].keys():
    print(user)
    for k,v in data['users'][user].copy().items():
        if k != 'ddd' and k != 'name':
            del data['users'][user][k]
print(data)
with open('data/fb2024init.json', 'w') as f:
    json.dump(data,f)