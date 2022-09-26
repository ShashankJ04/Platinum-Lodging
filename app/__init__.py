from flask import Flask

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
app.config['SECRET_KEY']="SRUNNSIILT"
app.config['TESTING'] = True
app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'



#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'


from app import routes
from app.databasemodel import db,properties
