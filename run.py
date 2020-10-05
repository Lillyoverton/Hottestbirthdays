from flask import Flask, render_template, jsonify

import sqlite3
BIRTHDAYSDB = 'birthdays.db'

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nzjanuary', methods=['GET'])
def nzjanuary_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzjanuary = []
    cur = con.execute('SELECT * FROM nzjanuary')

    for row in cur:
        nzjanuary.append(list(row))
    con.close()
    return jsonify(nzjanuary)
