import pandas as pd
from datetime import datetime
import pytz
import json

cdt = pytz.timezone('America/Chicago')
df = pd.read_excel('data\import.xlsx')

date_format = "%Y-%m-%d %H:%M:%S"
df['time'] = df['date'].apply(lambda x: int(cdt.localize(x).astimezone(pytz.utc).timestamp()))
df['away'] = df['away'].str.title()
df['home'] = df['home'].str.title()

df['game'] = [f'game{idx + 1}' for idx in df.index]

df['humanDate'] = df['date'].apply(lambda x: x.strftime("%b %d %H:%M"))
print(df)
df = df.drop(['date'],axis=1)
#df.drop(['date'],axis=1).to_json('data/imports.json',orient='records')
data = df.to_dict(orient='records')
print(data)
res = {}
for obj in data:
    game = obj['game']
    del obj['game']
    res[game] = obj

res["tiebreaker"] = {
        "home": "Texas will beat Ohio St by X points? (Negative for losses by)",
        "time": 1756569600,
        "humanDate": "Aug 30 11:00"
      }
with open("data/imports.json","w") as f: json.dump(res,f)