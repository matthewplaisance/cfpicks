import json


with open('z.json', 'r') as f:
    data = json.load(f)
print(data)

res = {}
for game,items in data.items():
    res[game] = {
        "pick":items['pick'],
        "points":int(items['points']) - 2
    }
print('\n',res)
with open('res.json', 'w') as f:
    json.dump(res,f)