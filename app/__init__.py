# app/__init__.py

from flask import Flask
from app.routes import main
from app.db import get_db, close_db, init_db

def create_app():
    app = Flask(__name__)
    
    # Configuration (optional: secret key for sessions, etc.)
    app.config['SECRET_KEY'] = 'your_secret_key_here'  # Replace with a secure key later

    # Register routes
    from .routes import main
    app.register_blueprint(main)

    app.teardown_appcontext(close_db)
    
    @app.cli.command("init-db")

    def init_db_command():
        init_db()
        print("Initialized the database.")
    return app
