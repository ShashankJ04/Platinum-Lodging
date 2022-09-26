from enum import unique
from app import app
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy(app)

# class properties(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(255))
#     state = db.Column(db.String(255))
#     host = db.Column(db.String(255))
#     guest = db.Column(db.String(255))
#     bedroom=db.Column(db.Integer)
#     bed=db.Column(db.Integer)
#     bathroom=db.Column(db.Integer)
#     cost=db.Column(db.Integer)    

#     def __repr__(self):
#         return '<Name %r>' %self.name 

class properties(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(255))
    state = db.Column(db.String(255))
    host = db.Column(db.String(255))
    guest = db.Column(db.Integer)
    bedroom=db.Column(db.Integer)
    bed=db.Column(db.Integer)
    bathroom=db.Column(db.Integer)
    cost=db.Column(db.Integer)
    # img=db.Column(db.Image)
    
