# 🎓 Flask Quick Reference Sheet

This is your cheat sheet for Flask concepts as we build!

---

## 🔧 Basic Flask Structure

```python
from flask import Flask

app = Flask(__name__)

@app.route('/path')
def function_name():
    return "response"

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

---

## 🛣️ Routes (URLs)

### Simple Route
```python
@app.route('/')
def home():
    return "Hello!"
```
**Visit:** `http://localhost:5000/`

---

### Route with Path
```python
@app.route('/about')
def about():
    return "About page"
```
**Visit:** `http://localhost:5000/about`

---

### Route with Variable
```python
@app.route('/user/<username>')
def show_user(username):
    return f"Hello {username}!"
```
**Visit:** `http://localhost:5000/user/john` → "Hello john!"

---

## 📨 HTTP Methods

### GET (Read Data)
```python
@app.route('/items')
def get_items():
    return {"items": ["apple", "banana"]}
```

### POST (Send Data)
```python
@app.route('/items', methods=['POST'])
def add_item():
    data = request.get_json()
    return {"message": "Item added"}
```

### Both GET and POST
```python
@app.route('/items', methods=['GET', 'POST'])
def items():
    if request.method == 'POST':
        return "Adding item"
    else:
        return "Getting items"
```

---

## 📦 Working with Data

### Get JSON from Request
```python
from flask import request

@app.route('/api/data', methods=['POST'])
def receive_data():
    data = request.get_json()
    # data is now a Python dict
    name = data['name']
    return {"received": name}
```

### Send JSON Response
```python
from flask import jsonify

@app.route('/api/data')
def send_data():
    return jsonify({
        "name": "John",
        "age": 25
    })
```

**Or simpler (Flask 1.0+):**
```python
@app.route('/api/data')
def send_data():
    return {"name": "John", "age": 25}
```

---

## 🗄️ Database (SQLite)

### Connect to Database
```python
import sqlite3

conn = sqlite3.connect('database.db')
cursor = conn.cursor()
```

### Create Table
```python
cursor.execute('''
    CREATE TABLE users (
        id INTEGER PRIMARY KEY,
        username TEXT,
        email TEXT
    )
''')
conn.commit()
```

### Insert Data
```python
cursor.execute(
    'INSERT INTO users (username, email) VALUES (?, ?)',
    ('john', 'john@example.com')
)
conn.commit()
```

### Select Data
```python
cursor.execute('SELECT * FROM users')
users = cursor.fetchall()
# users = [(1, 'john', 'john@example.com'), ...]
```

### Close Connection
```python
conn.close()
```

---

## 🔒 Security

### Hash Password
```python
from werkzeug.security import generate_password_hash

hashed = generate_password_hash('password123')
# Store 'hashed' in database, NOT the plain password!
```

### Check Password
```python
from werkzeug.security import check_password_hash

is_valid = check_password_hash(hashed, 'password123')
# Returns True or False
```

---

## 🎫 JWT Tokens (Later!)

### Generate Token
```python
import jwt

token = jwt.encode(
    {"user_id": 1},
    "SECRET_KEY",
    algorithm="HS256"
)
```

### Verify Token
```python
try:
    data = jwt.decode(token, "SECRET_KEY", algorithms=["HS256"])
    user_id = data['user_id']
except:
    # Invalid token
    pass
```

---

## 🌐 CORS (Let React Talk to Flask)

### Install
```bash
pip install flask-cors
```

### Use
```python
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow all origins (development only!)
```

---

## ⚠️ Error Handling

### Return Error
```python
@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    
    if not data.get('email'):
        return {"error": "Email required"}, 400
    
    return {"message": "Success"}, 200
```

**Status Codes:**
- `200` = Success
- `201` = Created
- `400` = Bad Request (user error)
- `401` = Unauthorized (need login)
- `404` = Not Found
- `500` = Server Error

---

## 🧪 Testing

### In Browser
```
http://localhost:5000/api/hello
```

### Using curl
```bash
# GET request
curl http://localhost:5000/api/hello

# POST request
curl -X POST http://localhost:5000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com"}'
```

### Using Python requests
```python
import requests

response = requests.get('http://localhost:5000/api/hello')
print(response.json())

response = requests.post(
    'http://localhost:5000/api/login',
    json={"email": "john@example.com"}
)
print(response.json())
```

---

## 🎯 Common Patterns

### Standard API Response
```python
@app.route('/api/users')
def get_users():
    return {
        "success": True,
        "data": [...],
        "message": "Users retrieved"
    }
```

### Error Response
```python
return {
    "success": False,
    "error": "User not found"
}, 404
```

### Validate Input
```python
@app.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()
    
    # Check required fields
    if not data.get('email'):
        return {"error": "Email required"}, 400
    
    if not data.get('password'):
        return {"error": "Password required"}, 400
    
    # All good!
    return {"message": "User registered"}, 201
```

---

## 📚 Imports You'll Use

```python
# Basic Flask
from flask import Flask, request, jsonify

# CORS
from flask_cors import CORS

# Database
import sqlite3

# Security
from werkzeug.security import generate_password_hash, check_password_hash

# JWT (later)
import jwt

# Dates
from datetime import datetime
```

---

## 💡 Tips

1. **Always use debug=True in development**
   - Auto-restarts on code changes

2. **Use .get() for optional data**
   ```python
   email = data.get('email')  # Returns None if missing
   email = data['email']      # Crashes if missing
   ```

3. **Always commit database changes**
   ```python
   cursor.execute('INSERT...')
   conn.commit()  # ← DON'T FORGET THIS!
   ```

4. **Close database connections**
   ```python
   conn.close()  # When done
   ```

5. **Test as you go**
   - Build one route at a time
   - Test it works before moving on

---

## 🚀 Next Steps

1. Read `BACKEND_TUTORIAL.md` - Step-by-step guide
2. Check `LEARNING_ROADMAP.md` - See what's coming
3. Ask questions anytime!

**You've got this!** 💪
