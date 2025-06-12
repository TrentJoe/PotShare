import os
import sqlite3

DB_PATH = "app/data/database.db"
SCHEMA_PATH = "schema.sql"

def reset_expenses_table():
    if os.path.exists(DB_PATH):
        os.remove(DB_PATH)
        print("Old database removed.")
    else:
        print("No old database found. Creating new one.")

    with open(SCHEMA_PATH, 'r') as schema_file:
        schema = schema_file.read()

    with sqlite3.connect(DB_PATH) as conn:
        conn.executescript(schema)
        print("New database created using schema.sql.")

if __name__ == "__main__":
    reset_expenses_table()
