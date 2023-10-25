import pandas as pd
from datetime import datetime
import pytz
cdt = pytz.timezone('America/Chicago')
df = pd.read_excel('data\import.xlsx')

date_format = "%Y-%m-%d %H:%M:%S"
df['time'] = df['date'].apply(lambda x: int(cdt.localize(x).astimezone(pytz.utc).timestamp()))
df['away'] = df['away'].str.title()
df['home'] = df['home'].str.title()

print(df)

# Parse the string into a datetime object

df['humanDate'] = df['date'].apply(lambda x: x.strftime("%b %d %H:%M"))
print(df)
df.drop(['date'],axis=1).to_json('data/imports.json',orient='records')
