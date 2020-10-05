from flask import Flask, render_template, jsonify

import sqlite3
BIRTHDAYSDB = 'birthdays.db'

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nzbirthdays', methods=['GET'])
def nzbirthdays_list():
    return jsonify('amount')
