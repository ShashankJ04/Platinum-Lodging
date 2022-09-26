import email
from logging import exception
from os import name
from datetime import datetime
from sys import modules
from flask import render_template, flash, request, redirect, url_for
from app import app
from app.databasemodel import db,properties
from sqlalchemy import or_,desc
from flask_admin import Admin,expose,AdminIndexView
from flask import jsonify
import sys
from flask_admin.contrib.sqla import ModelView


# admin = Admin(app)
admin = Admin(app, template_mode='bootstrap4')
admin.add_view(ModelView(properties, db.session))


@app.route('/', methods=['GET'])
def home():
	
	return render_template('index.html')

@app.route('/properties', methods=['GET'])
def all_properties():
	lol=properties.query.all()
	data=[]
	for d in lol:
		row_as_dict = {column: str(getattr(d, column)) for column in d.__table__.c.keys()}
		data.append(row_as_dict)
	return render_template('vikhyat.html',data=data)

@app.route('/properties/property/<int:id>', methods=['GET'])
def property(id):
	data=properties.query.get_or_404(id)
	
	return render_template('property.html',data=data)

@app.route('/properties/property/<int:id>/gird', methods=['GET'])
def gridview(id):

	return render_template('grid.html',id=id)

