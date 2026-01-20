# 🎓 Building PotShare Backend - Step by Step Tutorial

## ✅ What You Just Did!

You created your **first Flask web server**! 

**What you have now:**
- `app.py` - A simple Flask app with 2 routes
- Server running on `http://localhost:5000`
- Responds to HTTP requests

**Test it yourself:**
1. Open browser: `http://localhost:5000` → See "Hello from Flask!"
2. Open: `http://localhost:5000/test` → See "This is a test route!"

---

## 📚 Understanding What You Built

### What is Flask?

Flask is a **web framework** - it helps you:
1. **Create a web server** (handles HTTP requests)
2. **Define routes** (URLs that do different things)
3. **Send responses** (data back to the browser/React)

### Breaking Down app.py Line by Line

```python
from flask import Flask
```
**What this does:** Import the Flask library (like importing React components)

---

```python
app = Flask(__name__)
```
**What this does:** Create your Flask application
- `app` = Your web server
- `__name__` = Tells Flask the name of your file

---

```python
@app.route('/')
def home():
    return "Hello from Flask!"
```

**What this does:** Create a **route** (like a React Route)

**Breaking it down:**
- `@app.route('/')` = **Decorator** - tells Flask "this function handles the / URL"
- `def home():` = Function that runs when someone visits `/`
- `return "..."` = What to send back to the browser

**Like React Router:**
```javascript
// React
<Route path="/" element={<Home />} />

// Flask (same concept!)
@app.route('/')
def home():
    return <response>
```

---

```python
if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

**What this does:** Start the server

- `if __name__ == '__main__':` = "Only run this if I execute this file directly"
- `app.run()` = Start the Flask server
- `debug=True` = Auto-restart when you save changes (like React hot reload!)
- `port=5000` = Run on port 5000

---

## 🎯 Next Steps: Let's Build Features!

We'll build your backend in small, understandable steps:

### Step 2: Return JSON Instead of Text ✅ READY TO DO NOW
- Learn how to send JSON (like React expects)
- Create `/api/hello` that returns `{"message": "Hello"}`

### Step 3: Receive Data from Frontend
- Learn how to receive POST requests
- Create `/api/echo` that echoes back what you send

### Step 4: Add CORS (Let React Talk to Flask)
- Install Flask-CORS
- Allow React (port 3000) to call Flask (port 5000)

### Step 5: Create Your First Database
- SQLite basics (simplest database)
- Create `users` table
- Store and retrieve data

### Step 6: Build Registration
- Receive username, email, password
- Hash password (security!)
- Save to database

### Step 7: Build Login
- Check if user exists
- Verify password
- Return success/error

### Step 8: Add Authentication (JWT Tokens)
- Generate tokens when user logs in
- Verify tokens on protected routes
- Connect to your React login form

### Step 9: Build Expense Features
- Create expenses table
- Add expense endpoint
- Get expenses endpoint
- Calculate balances

### Step 10: Connect Everything
- Make React forms call your Flask API
- Display data from database
- Full working app!

---

## 🚀 Ready for Step 2?

**What you'll learn:**
- How to return JSON (not just text)
- How Flask responds to different HTTP methods (GET, POST)
- How to send data from React to Flask

**Let me know when you're ready and I'll guide you through it!**

---

## 💡 Key Concepts You've Learned

✅ **Web Server** - Program that listens for HTTP requests
✅ **Routes** - URLs that do different things (`/` vs `/test`)
✅ **Flask** - Python framework for building web servers
✅ **Port** - Number that identifies your server (5000)
✅ **localhost** - Your own computer (127.0.0.1)

---

## 🔧 Commands Reference

**Start Flask server:**
```bash
python app.py
```

**Stop Flask server:**
```
Press CTRL+C in terminal
```

**Test in browser:**
```
http://localhost:5000
http://localhost:5000/test
```

---

## 📖 Resources

**Flask Documentation:**
https://flask.palletsprojects.com/

**Flask Quick Start:**
https://flask.palletsprojects.com/en/3.0.x/quickstart/

**What We'll Use:**
- Flask (web server)
- Flask-CORS (let React talk to Flask)
- SQLite (database - built into Python!)
- Werkzeug (password hashing - comes with Flask!)

---

## ❓ Questions to Check Understanding

Before moving on, make sure you understand:

1. **What is a route?**
   - A URL path that triggers a function

2. **What does `@app.route('/')` do?**
   - Maps the URL `/` to the function below it

3. **What does `return` do?**
   - Sends data back to the browser/React

4. **What is localhost:5000?**
   - Your Flask server running on your computer

5. **Why port 5000?**
   - Convention for Flask (React uses 3000)

**Got it?** Let's move to Step 2! 🚀
