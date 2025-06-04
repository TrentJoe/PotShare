# app/db.py

import sqlite3
from flask import g

DATABASE = "instance/potshare.db"

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
