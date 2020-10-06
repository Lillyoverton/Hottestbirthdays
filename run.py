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

@app.route('/nzapril', methods=['GET'])
def nzapril_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzapril = []
    cur = con.execute('SELECT * FROM nzapril')

    for row in cur:
        nzapril.append(list(row))
    con.close()
    return jsonify(nzapril)

@app.route('/nzmay', methods=['GET'])
def nzmay_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzmay = []
    cur = con.execute('SELECT * FROM nzmay')

    for row in cur:
        nzmay.append(list(row))
    con.close()
    return jsonify(nzmay)

@app.route('/nzjune', methods=['GET'])
def nzjune_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzjune = []
    cur = con.execute('SELECT * FROM nzjune')

    for row in cur:
        nzjune.append(list(row))
    con.close()
    return jsonify(nzjune)

@app.route('/nzjuly', methods=['GET'])
def nzjuly_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzjuly = []
    cur = con.execute('SELECT * FROM nzjuly')

    for row in cur:
        nzjuly.append(list(row))
    con.close()
    return jsonify(nzjuly)

@app.route('/nzaugust', methods=['GET'])
def nzaugust_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzaugust = []
    cur = con.execute('SELECT * FROM nzaugust')

    for row in cur:
        nzaugust.append(list(row))
    con.close()
    return jsonify(nzaugust)

@app.route('/nzseptember', methods=['GET'])
def nzseptember_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzseptember = []
    cur = con.execute('SELECT * FROM nzseptember')

    for row in cur:
        nzseptember.append(list(row))
    con.close()
    return jsonify(nzseptember)

@app.route('/nzoctober', methods=['GET'])
def nzoctober_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzoctober = []
    cur = con.execute('SELECT * FROM nzoctober')

    for row in cur:
        nzoctober.append(list(row))
    con.close()
    return jsonify(nzoctober)

@app.route('/nznovember', methods=['GET'])
def nznovember_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nznovember = []
    cur = con.execute('SELECT * FROM nznovember')

    for row in cur:
        nznovember.append(list(row))
    con.close()
    return jsonify(nznovember)

@app.route('/nzdecember', methods=['GET'])
def nzdecember_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    nzdecember = []
    cur = con.execute('SELECT * FROM nzdecember')

    for row in cur:
        nzdecember.append(list(row))
    con.close()
    return jsonify(nzdecember)
