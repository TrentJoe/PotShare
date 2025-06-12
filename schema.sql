-- schema.sql

CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT NOT NULL,
    amount REAL NOT NULL,
    group_name TEXT,
    split_with TEXT NOT NULL,
    date TEXT NOT NULL,
    payer_id INTEGER NOT NULL,
    FOREIGN KEY (payer_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);


