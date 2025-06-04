-- schema.sql

CREATE TABLE IF NOT EXISTS expenses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    description TEXT NOT NULL,
    amount REAL NOT NULL,
    group_name TEXT,
    split_with TEXT,
    date TEXT NOT NULL
);
