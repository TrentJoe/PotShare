# 🚀 PotShare - Quick Start Guide

This guide will get you up and running with the PotShare application in just a few minutes!

## What You Need

- ✅ Python 3.8+ installed
- ✅ Node.js 16+ installed
- ✅ Two terminal windows open

---

## Step 1: Backend Setup (Terminal 1)

### Install Python Dependencies
```bash
cd "c:\Users\joetr\OneDrive - Bournemouth University\Python\Potshare"
pip install -r requirements.txt
```

### Initialize Database
```bash
python init_db.py
```

### Start Flask Server
```bash
python app.py
```

✅ **Backend running at:** `http://127.0.0.1:5000`

---

## Step 2: Frontend Setup (Terminal 2)

### Install Node Dependencies (First Time Only)
```bash
cd "c:\Users\joetr\OneDrive - Bournemouth University\Python\Potshare\frontend-react"
npm install
```

### Start React Dev Server
```bash
npm run dev
```

✅ **Frontend running at:** `http://localhost:3000`

---

## Step 3: Use the Application

Open your browser to: **`http://localhost:3000`**

### Test Account
Create a new account or use test credentials if you've seeded the database.

### Features to Try
1. **Register** a new account
2. **Login** with your credentials
3. **Add an expense** with description, amount, and split with another user
4. **View your balance** (what you owe vs. what you're owed)
5. **Delete expenses** you created

---

## Troubleshooting

### Backend Issues

**Database not found?**
```bash
python init_db.py
```

**Port 5000 already in use?**
```bash
# Stop any running Flask servers or change port in app.py
```

**Module not found errors?**
```bash
pip install -r requirements.txt
```

### Frontend Issues

**Dependencies not installed?**
```bash
cd frontend-react
npm install
```

**CORS errors?**
- Ensure Flask backend is running on port 5000
- Check `vite.config.js` proxy configuration
- Verify Flask-CORS is installed

**Port 3000 already in use?**
```bash
# Vite will prompt you to use an alternative port
# Press 'y' to continue
```

---

## Daily Development Workflow

### Start Both Servers

**Terminal 1 - Backend:**
```bash
cd "c:\Users\joetr\OneDrive - Bournemouth University\Python\Potshare"
python app.py
```

**Terminal 2 - Frontend:**
```bash
cd "c:\Users\joetr\OneDrive - Bournemouth University\Python\Potshare\frontend-react"
npm run dev
```

### Making Changes

**Frontend (React):**
- Edit files in `frontend-react/src/`
- Changes hot reload automatically
- Browser updates instantly

**Backend (Flask):**
- Edit files in `backend/`
- Flask debug mode reloads on save
- Check terminal for errors

---

## Project Structure

```
PotShare/
├── backend/                 # Flask API (Your focus!)
│   ├── api/                # Routes & endpoints
│   ├── models/             # Business logic
│   ├── database/           # Data access layer
│   └── utils/              # Auth, email, validators
├── frontend-react/         # React UI (Comfort zone)
│   ├── src/
│   │   ├── pages/         # Dashboard, Login, Register
│   │   ├── components/    # Reusable UI components
│   │   ├── services/      # API calls
│   │   └── context/       # Auth state management
│   └── package.json
├── app.py                  # Flask entry point
├── init_db.py             # Database initialization
└── requirements.txt       # Python dependencies
```

---

## Key Files You'll Work With

### Backend (Flask/Python - Your Learning Focus)
- `backend/api/routes/` - API endpoints
- `backend/models/` - Business logic
- `backend/database/db.py` - Database operations
- `backend/database/schema.sql` - Database schema

### Frontend (React - Your Comfort Zone)
- `frontend-react/src/pages/Dashboard.jsx` - Main UI
- `frontend-react/src/services/api.js` - API client
- `frontend-react/src/context/AuthContext.jsx` - Auth state

---

## Learning Path Suggestions

Since you're focusing on **Flask/Python/SQL**, here are key areas to explore:

### Week 1: Flask Basics
- ✅ Routing and blueprints (`backend/api/routes/`)
- ✅ Request handling (JSON, forms)
- ✅ Response formatting

### Week 2: Database & SQL
- ✅ SQLite basics (`backend/database/`)
- ✅ Writing queries (SELECT, INSERT, UPDATE, DELETE)
- ✅ Database design (schema.sql)

### Week 3: Authentication
- ✅ Password hashing (`backend/models/user.py`)
- ✅ JWT tokens (`backend/utils/auth.py`)
- ✅ Protected routes

### Week 4: Advanced Features
- ✅ Email functionality (`backend/utils/email.py`)
- ✅ Error handling
- ✅ Validation (`backend/utils/validators.py`)

---

## API Testing

Use these tools to test your Flask API directly:

### Postman / Insomnia
Import the API endpoints from `API_DOCS.md`

### cURL Examples

**Register:**
```bash
curl -X POST http://127.0.0.1:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

**Login:**
```bash
curl -X POST http://127.0.0.1:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**Get Expenses (with token):**
```bash
curl -X GET http://127.0.0.1:5000/api/expenses \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## Next Steps

1. ✅ **Get both servers running** (you're here!)
2. 🎯 **Create an account and add expenses**
3. 📚 **Read through `API_DOCS.md`** to understand endpoints
4. 🔍 **Explore Flask routes** in `backend/api/routes/`
5. 💾 **Look at database queries** in `backend/models/`
6. 🛠️ **Make your first change** - add a new feature!

---

## Need Help?

- 📖 **Full Documentation:** See main `README.md`
- 🔌 **API Reference:** See `API_DOCS.md`
- ⚛️ **React Frontend:** See `frontend-react/README.md`
- 🏗️ **Architecture:** See `RESTRUCTURE_COMPLETE.md`

---

**Remember:** The React frontend is there so you can focus on learning Flask, Python, and SQL without worrying about frontend complexity. All the interesting backend logic is in the `backend/` folder! 🚀
