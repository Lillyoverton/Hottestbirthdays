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

@app.route('/nzfebruary', methods=['GET'])
def nzfebruary_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzfebruary = []
    cur = con.execute('SELECT * FROM nzfebruary')

    for row in cur:
        nzfebruary.append(list(row))
    con.close()
    return jsonify(nzfebruary)

@app.route('/nzmarch', methods=['GET'])
def nzmarch_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzmarch = []
    cur = con.execute('SELECT * FROM nzmarch')

    for row in cur:
        nzmarch.append(list(row))
    con.close()
    return jsonify(nzmarch)
