import email
from logging import exception
from os import name
from datetime import datetime
from sys import modules
from flask import render_template, flash, request, redirect, url_for
from app import app
from flask_admin import Admin,expose,AdminIndexView

admin = Admin(app)

@app.route('/', methods=['GET'])
def home():

	return render_template('index.html')

@app.route('/properties', methods=['GET'])
def properties():

	return render_template('vikhyat.html')

@app.route('/properties/property', methods=['GET'])
def property():

	return render_template('property.html')

@app.route('/properties/property/gird', methods=['GET'])
def gridview():

	return render_template('grid.html')

