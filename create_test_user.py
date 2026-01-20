# create_test_user.py
from app import create_app
from app.db import create_user

app = create_app()
with app.app_context():
    # Create a test user
    username = "testuser"
    password = "password123"
    
    if create_user(username, password):
        print(f"✓ Test user created successfully!")
        print(f"  Username: {username}")
        print(f"  Password: {password}")
    else:
        print("✗ User already exists or error occurred")
