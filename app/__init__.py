# app/__init__.py

from flask import Flask

def create_app():
    app = Flask(__name__)
    
    # Configuration (optional: secret key for sessions, etc.)
    app.config['SECRET_KEY'] = 'your_secret_key_here'  # Replace with a secure key later

    # Register routes
    from .routes import main
    app.register_blueprint(main)

    return app
