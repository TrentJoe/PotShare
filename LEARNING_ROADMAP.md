# 🗺️ PotShare Backend Roadmap

## Current Status: ✅ Step 1 Complete!

You have a working Flask server that responds to HTTP requests.

---

## Learning Path (We'll Do This Together!)

### ✅ DONE - Step 1: Hello World Flask
- Created `app.py`
- Started Flask server
- Tested in browser
- **You learned:** Routes, Flask basics, localhost

---

### 🎯 NEXT - Step 2: JSON Responses
**Goal:** Make Flask send JSON (like your React expects)

**What you'll do:**
```python
@app.route('/api/hello')
def hello():
    return {"message": "Hello from Flask!", "status": "success"}
```

**What you'll learn:**
- `jsonify()` function
- Why React needs JSON (not text)
- How to structure API responses

**Time:** 10 minutes

---

### Step 3: Receive Data (POST Requests)
**Goal:** Let React send data to Flask

**What you'll do:**
```python
@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.get_json()
    return {"you_sent": data}
```

**What you'll learn:**
- POST vs GET requests
- `request.get_json()`
- How React sends data to Flask

**Time:** 15 minutes

---

### Step 4: Enable CORS
**Goal:** Let React (port 3000) talk to Flask (port 5000)

**What you'll do:**
```python
from flask_cors import CORS
CORS(app)
```

**What you'll learn:**
- What CORS is and why it's needed
- How to install Flask-CORS
- Security basics

**Time:** 10 minutes

---

### Step 5: First Database Table
**Goal:** Store data permanently

**What you'll do:**
- Create `database.db` file
- Create `users` table
- Write first SQL query

**What you'll learn:**
- SQLite basics
- SQL CREATE TABLE
- Primary keys, data types

**Time:** 20 minutes

---

### Step 6: Save Data to Database
**Goal:** Insert a user into the database

**What you'll do:**
```python
@app.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()
    # INSERT INTO users...
    return {"message": "User created"}
```

**What you'll learn:**
- SQL INSERT
- How to connect to database
- Commit changes

**Time:** 20 minutes

---

### Step 7: Read Data from Database
**Goal:** Get data back from database

**What you'll do:**
```python
@app.route('/api/users')
def get_users():
    # SELECT * FROM users
    return {"users": [...]}
```

**What you'll learn:**
- SQL SELECT
- Fetch results
- Return as JSON

**Time:** 15 minutes

---

### Step 8: Password Hashing
**Goal:** Store passwords securely

**What you'll do:**
```python
from werkzeug.security import generate_password_hash
hashed = generate_password_hash('password123')
```

**What you'll learn:**
- Why NEVER store plain passwords
- How hashing works
- Werkzeug security

**Time:** 15 minutes

---

### Step 9: Registration Endpoint
**Goal:** Let users create accounts

**What you'll do:**
```python
@app.route('/api/register', methods=['POST'])
def register():
    # Get username, email, password
    # Hash password
    # Save to database
    return {"message": "Registered!"}
```

**What you'll learn:**
- Validate input
- Check if user exists
- Error handling

**Time:** 30 minutes

---

### Step 10: Login Endpoint
**Goal:** Let users log in

**What you'll do:**
```python
@app.route('/api/login', methods=['POST'])
def login():
    # Check if user exists
    # Verify password
    return {"message": "Logged in!"}
```

**What you'll learn:**
- `check_password_hash()`
- Compare hashed passwords
- Return success/error

**Time:** 20 minutes

---

### Step 11: JWT Tokens
**Goal:** Keep users logged in

**What you'll do:**
```python
import jwt
token = jwt.encode({"user_id": 1}, "secret")
return {"token": token}
```

**What you'll learn:**
- What JWT tokens are
- How to generate tokens
- Why tokens are better than sessions

**Time:** 30 minutes

---

### Step 12: Protected Routes
**Goal:** Require login for certain endpoints

**What you'll do:**
```python
@app.route('/api/profile')
def profile():
    token = request.headers.get('Authorization')
    # Verify token
    # Return user data
```

**What you'll learn:**
- Authorization headers
- Token verification
- Decorators (optional)

**Time:** 25 minutes

---

### Step 13: Expenses Table
**Goal:** Store expense data

**What you'll do:**
- Create `expenses` table
- Foreign keys (link to users)
- Date fields

**What you'll learn:**
- Table relationships
- Foreign keys
- SQL data types

**Time:** 20 minutes

---

### Step 14: Add Expense Endpoint
**Goal:** Let users add expenses

**What you'll do:**
```python
@app.route('/api/expenses', methods=['POST'])
def add_expense():
    # Get description, amount, date
    # Save to database
    return {"message": "Expense added"}
```

**What you'll learn:**
- Insert with multiple tables
- Link data between tables

**Time:** 20 minutes

---

### Step 15: Get Expenses Endpoint
**Goal:** Show user their expenses

**What you'll do:**
```python
@app.route('/api/expenses')
def get_expenses():
    # SELECT * FROM expenses WHERE user_id = ?
    return {"expenses": [...]}
```

**What you'll learn:**
- SQL WHERE clause
- Filter by user
- JOIN tables (optional)

**Time:** 20 minutes

---

### Step 16: Calculate Balances
**Goal:** Show who owes what

**What you'll do:**
```python
@app.route('/api/balance')
def get_balance():
    # Calculate owed and owes
    return {"owed": 100, "owes": 50}
```

**What you'll learn:**
- SQL aggregation (SUM)
- Business logic
- Calculations

**Time:** 30 minutes

---

### Step 17: Connect React Forms
**Goal:** Make React call your Flask API

**What you'll do:**
- Update React Login to call `/api/login`
- Update Register to call `/api/register`
- Test end-to-end

**What you'll learn:**
- Full stack integration
- Debugging API calls
- Chrome DevTools

**Time:** 30 minutes

---

### Step 18: Display Data in React
**Goal:** Show database data in React

**What you'll do:**
- Call `/api/expenses` from Dashboard
- Display expenses in list
- Show balances

**What you'll learn:**
- useEffect for data loading
- Mapping over arrays
- State management

**Time:** 30 minutes

---

## 📊 Total Time Estimate

**Core Backend:** ~5 hours (Steps 1-12)
**Expense Features:** ~2 hours (Steps 13-16)
**React Integration:** ~1 hour (Steps 17-18)

**Total:** ~8 hours of focused learning

**But we'll do this over multiple sessions!**

---

## 🎯 Current Focus

**You are here:** Step 1 ✅
**Next step:** Step 2 - JSON Responses

**Ready to continue?** Just say "Let's do Step 2!" and I'll guide you through it.

---

## 💡 Learning Approach

For each step I will:
1. ✅ Explain what we're building
2. ✅ Show you the code with comments
3. ✅ Explain each line
4. ✅ Test it together
5. ✅ Give you a challenge to try yourself
6. ✅ Answer any questions

**You're building this yourself - I'm just the guide!**

---

## 📝 Notes

- Take breaks between steps
- Ask questions anytime
- Try things yourself
- Make mistakes (that's learning!)
- Reference this roadmap anytime

**You've got this!** 🚀
