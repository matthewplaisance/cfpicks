import pandas as pd
from datetime import datetime
df = pd.read_excel('data\import.xlsx')
date_format = "%Y-%m-%d %H:%M:%S"

df['time'] = df['date'].apply(lambda x: int(x.timestamp()))
print(df)

# Parse the string into a datetime object

df['humanDate'] = df['date'].apply(lambda x: x.strftime("%b %d %H:%M"))
print(df)
df.drop(['date'],axis=1).to_json('imports.json',orient='records')
