import json

with open('data/games.json', 'r') as f: data = json.load(f)['week4']

t1 = """<tr class="text-primary"><th>Current Points</th>"""
t2 = """<tr class="date-holder" class="text-primary">
                        <th style="color: white;">Holder</th>
                        <th style="color: white;">Holder</th>"""

for key, game in data.items():
    print(key)
    print(game)
    if key != 'tb':
        t1 += f"""
            <th>{game.get('away')} at {game.get('home')}</th>
        """
    else:
        t1 += f"""
            <th>{game.get('home')}</th>
        """
    t2 += f"""
            <th>{game.get('humanDate')}</th>
        """
t1 += """</tr>"""
t2 += """<th id="tb_res"></th>
                      </tr>
"""

# Write the HTML to a file
with open("game_table.html", "w") as html_file:
    html_file.write(t1+t2)

