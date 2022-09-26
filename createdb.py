import sqlite3
connection = sqlite3.connect('app/project.db')
from datetime import datetime

cur = connection.cursor()
data=[{
    'title': 'Liberty Hill',
    'state':'TX',
    'host': "Tara",
    'guest': 8,
    'bedroom':4,
    'bed':3,
    'bathroom':2,
    'cost':125
},{
    'title': 'Shenandoah',
    'state':'CA',
    'host': 'Suhas',
    'guest': 8,
    'bedroom':4,
    'bed':4,
    'bathroom':2,
    'cost':190
},{
    'title': 'Mumbai',
    'state':'MH',
    'host': 'Alex',
    'guest': 34,
    'bedroom':34,
    'bed':23,
    'bathroom':32,
    'cost':19000
}]
for values in data:
    cur.execute('INSERT INTO properties (title, state, host, guest, bedroom, bed, bathroom, cost) VALUES ( :title, :state, :host, :guest, :bedroom, :bed, :bathroom, :cost);',values)
connection.commit()
# cur.execute("SELECT * from properties;")

# print(cur.fetchall())
# cur.execute("delete from properties;")
# connection.commit()