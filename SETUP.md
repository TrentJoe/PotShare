# PotShare - 3-Tier Architecture Setup Guide

## ✅ Completed Setup

Your PotShare application has been successfully restructured with a modern 3-tier architecture!

## 🏗️ Architecture Overview

```
Frontend (Presentation Layer)
    ↓ HTTP/JSON
Backend API (Business Logic Layer)
    ↓ SQL
Database (Data Access Layer)
```

## 📂 New Structure

- `backend/` - Flask REST API
  - `api/` - Routes and application factory
  - `models/` - Business logic (User, Expense)
  - `database/` - Database connection and schema
  - `utils/` - Helper functions (auth, email, validators)
  - `config.py` - Configuration management

- `frontend/` - Static HTML/CSS/JS
  - `index.html` - Home dashboard
  - `pages/` - Login, register, password reset
  - `css/` - Modern, responsive styles
  - `js/` - API client, auth, utilities

## 🚀 Next Steps

### 1. Configure Environment Variables

Copy `.env.example` to `.env` and fill in your details:

```bash
cp .env.example .env
```

Edit `.env`:
```env
SECRET_KEY=<generate-with-python>
JWT_SECRET_KEY=<generate-with-python>
MAIL_USERNAME=your-email@gmail.com
MAIL_PASSWORD=your-app-password
MAIL_DEFAULT_SENDER=your-email@gmail.com
```

Generate secure keys:
```bash
python -c "import secrets; print(secrets.token_hex(32))"
```

### 2. Initialize Database

```bash
flask --app app init-db
```

Or manually create the database:
```bash
python -c "from backend.api import create_app; from backend.database import init_db; app = create_app(); app.app_context().push(); init_db()"
```

### 3. Run the Application

```bash
python app.py
```

Access at:
- Frontend: http://127.0.0.1:5000
- API: http://127.0.0.1:5000/api

## 🔍 Key Differences from Old Structure

### Old (Monolithic):
- Templates rendered server-side
- Direct database access from routes
- Mixed concerns

### New (3-Tier):
- ✅ **Frontend**: Pure HTML/CSS/JS, calls API
- ✅ **Backend**: REST API returns JSON
- ✅ **Database**: Isolated through models
- ✅ JWT authentication
- ✅ CORS enabled
- ✅ Proper separation of concerns

## 📚 Learning Resources

- Flask documentation: https://flask.palletsprojects.com/
- JWT: https://jwt.io/
- REST API design: https://restfulapi.net/
- 3-Tier architecture: See README.md

## 🐛 Troubleshooting

**Database not found?**
- Run `flask --app app init-db`

**CORS errors?**
- Check `CORS_ORIGINS` in `.env`
- Make sure frontend and API use same origin

**Token errors?**
- Clear localStorage in browser dev tools
- Check JWT_SECRET_KEY is set

**Import errors?**
- Make sure all packages installed: `pip install -r requirements.txt`

## ✨ CSS Fixed!

The layout issues have been completely fixed with:
- Proper flexbox/grid layout
- Fixed header
- Responsive design
- Modern card-based UI
- Clean, professional styling

## 📖 Next Features to Add

1. User list dropdown for split_with field
2. Real-time balance updates
3. Expense editing
4. Group management
5. Friend system

---

Enjoy your professionally structured PotShare application! 🎉
