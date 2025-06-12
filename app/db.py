# app/db.py

import sqlite3
from flask import g
from werkzeug.security import generate_password_hash, check_password_hash

DATABASE = r"C:\Users\joetr\OneDrive - Bournemouth University\Python\Potshare\app\data\database.db"

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
        db.row_factory = sqlite3.Row
    return db

def close_db(e=None):
    db = g.pop('_database', None)
    if db is not None:
        db.close()

def init_db():
    db = get_db()
    with open("schema.sql", "r") as f:
        db.executescript(f.read())

def add_expense_to_db(description, amount, group, split_with, date):
    db = get_db()
    db.execute(
        'INSERT INTO expenses (description, amount, group_name, split_with, date) VALUES (?, ?, ?, ?, ?)',
        (description, amount, group, split_with, date)
    )
    db.commit()

def get_latest_expenses(limit=5):
    db = get_db()
    cursor = db.execute(
        'SELECT description, amount, group_name, split_with, date FROM expenses ORDER BY id DESC LIMIT ?',
        (limit,)
    )
    return cursor.fetchall()

def calculate_user_owes(user_id):
    db = get_db()
    total_owes = 0.0

    expenses = db.execute(
        "SELECT amount, payer_id, split_with FROM expenses"
    ).fetchall()

    for exp in expenses:
        try:
            split_with_ids = [int(uid.strip()) for uid in exp['split_with'].split(',')]
        except ValueError:
            continue  # skip invalid data

        if user_id in split_with_ids:
            share = exp['amount'] / (len(split_with_ids) + 1)  # include payer
            if exp['payer_id'] != user_id:
                total_owes += share

    return round(total_owes, 2)


def calculate_user_is_owed(user_id):
    db = get_db()
    total_is_owed = 0.0

    expenses = db.execute(
        "SELECT amount, payer_id, split_with FROM expenses"
    ).fetchall()

    for exp in expenses:
        try:
            split_with_ids = [int(uid.strip()) for uid in exp['split_with'].split(',')]
        except ValueError:
            continue  # skip invalid data

        if exp['payer_id'] == user_id:
            share = exp['amount'] / (len(split_with_ids) + 1)  # include payer
            total_is_owed += share * len(split_with_ids)

    return round(total_is_owed, 2)

#login authentication

def create_user(username, password):
    db = get_db()
    password_hash = generate_password_hash(password)
    
    try:
        db.execute(
            "INSERT INTO users (username, password_hash) VALUES (?, ?)",
            (username, password_hash)
        )
        db.commit()
        return True
    except sqlite3.IntegrityError:
        return False
    
def get_user_by_username(username):
    db = get_db()
    return db.execute(
        "SELECT * FROM users WHERE username = ?",(username,)
    ).fetchone()

def validate_login(username, password):
    user = get_user_by_username(username)
    if user and check_password_hash(user["password_hash"], password):
        return user
    return None
