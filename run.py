from flask import Flask, render_template, jsonify

import sqlite3
BIRTHDAYSDB = 'birthdays.db'

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/uk')
def ukresults():
    return render_template('ukresults.html')

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




@app.route('/ukjanuary', methods=['GET'])
def ukjanuary_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukjanuary = []
    cur = con.execute('SELECT * FROM ukjanuary')

    for row in cur:
        ukjanuary.append(list(row))
    con.close()
    return jsonify(ukjanuary)

@app.route('/ukfebruary', methods=['GET'])
def ukfebruary_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukfebruary = []
    cur = con.execute('SELECT * FROM ukfebruary')

    for row in cur:
        ukfebruary.append(list(row))
    con.close()
    return jsonify(ukfebruary)

@app.route('/ukmarch', methods=['GET'])
def ukmarch_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukmarch = []
    cur = con.execute('SELECT * FROM ukmarch')

    for row in cur:
        ukmarch.append(list(row))
    con.close()
    return jsonify(ukmarch)

@app.route('/ukapril', methods=['GET'])
def ukapril_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukapril = []
    cur = con.execute('SELECT * FROM ukapril')

    for row in cur:
        ukapril.append(list(row))
    con.close()
    return jsonify(ukapril)

@app.route('/ukmay', methods=['GET'])
def ukmay_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukmay = []
    cur = con.execute('SELECT * FROM ukmay')

    for row in cur:
        ukmay.append(list(row))
    con.close()
    return jsonify(ukmay)

@app.route('/ukjune', methods=['GET'])
def ukjune_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukjune = []
    cur = con.execute('SELECT * FROM ukjune')

    for row in cur:
        ukjune.append(list(row))
    con.close()
    return jsonify(ukjune)

@app.route('/ukjuly', methods=['GET'])
def ukjuly_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukjuly = []
    cur = con.execute('SELECT * FROM ukjuly')

    for row in cur:
        ukjuly.append(list(row))
    con.close()
    return jsonify(ukjuly)

@app.route('/ukaugust', methods=['GET'])
def ukaugust_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukaugust = []
    cur = con.execute('SELECT * FROM ukaugust')

    for row in cur:
        ukaugust.append(list(row))
    con.close()
    return jsonify(ukaugust)

@app.route('/ukseptember', methods=['GET'])
def ukseptember_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukseptember = []
    cur = con.execute('SELECT * FROM ukseptember')

    for row in cur:
        ukseptember.append(list(row))
    con.close()
    return jsonify(ukseptember)

@app.route('/ukoctober', methods=['GET'])
def ukoctober_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukoctober = []
    cur = con.execute('SELECT * FROM ukoctober')

    for row in cur:
        ukoctober.append(list(row))
    con.close()
    return jsonify(ukoctober)

@app.route('/uknovember', methods=['GET'])
def uknovember_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukonovember = []
    cur = con.execute('SELECT * FROM uknovember')

    for row in cur:
        uknovember.append(list(row))
    con.close()
    return jsonify(uknovember)

@app.route('/ukdecember', methods=['GET'])
def ukdecember_list():
    con = sqlite3.connect(BIRTHDAYSDB)
    ukdecember = []
    cur = con.execute('SELECT * FROM ukdecember')

    for row in cur:
        ukdecember.append(list(row))
    con.close()
    return jsonify(ukdecember)
