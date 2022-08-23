from flask import Flask

app = Flask(__name__)
app.config['TESTING'] = True



#app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'


from app import routes

