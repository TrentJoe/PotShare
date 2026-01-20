# PotShare React Frontend

Modern React frontend for the PotShare expense tracking application.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Flask backend running on port 5000

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000` and proxy API requests to the Flask backend on port 5000.

## 📁 Project Structure

```
frontend-react/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navigation.jsx
│   │   └── ProtectedRoute.jsx
│   ├── context/         # React Context for state management
│   │   └── AuthContext.jsx
│   ├── pages/           # Page components
│   │   ├── Dashboard.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Auth.css
│   │   └── Dashboard.css
│   ├── services/        # API service layer
│   │   └── api.js
│   ├── App.jsx          # Main app component with routing
│   ├── App.css          # Global app styles
│   ├── main.jsx         # React entry point
│   └── index.css        # Base CSS reset
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 🛠️ Available Scripts

- **`npm run dev`** - Start development server with hot reload
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint (if configured)

## 🔧 Configuration

### Vite Proxy
The `vite.config.js` file is configured to proxy API requests:
- Frontend: `http://localhost:3000`
- Backend API: `http://127.0.0.1:5000/api/*`

All requests to `/api/*` are automatically forwarded to the Flask backend.

## 🎨 Features

### Authentication
- Login with email and password
- Register new account
- JWT token-based authentication
- Protected routes
- Auto-redirect on authentication

### Dashboard
- View balance summary (owe, owed, net)
- Add new expenses
- View expense history
- Delete expenses (payer only)
- Real-time balance calculations

### User Experience
- Responsive design (mobile, tablet, desktop)
- Modern UI with gradients and shadows
- Loading states
- Error handling
- Form validation

## 🔐 Authentication Flow

1. User logs in → JWT token returned
2. Token stored in `localStorage`
3. Token sent in `Authorization` header for all API requests
4. Protected routes check authentication status
5. Auto-redirect to login if token invalid/expired

## 📦 Dependencies

### Core
- **React 18.2.0** - UI library
- **React DOM 18.2.0** - React renderer
- **React Router DOM 6.20.0** - Client-side routing

### HTTP & API
- **Axios 1.6.2** - HTTP client with interceptors

### Dev Tools
- **Vite 5.0.8** - Fast build tool
- **@vitejs/plugin-react 4.2.1** - React Fast Refresh

## 🌐 API Integration

The frontend communicates with the Flask backend via REST API:

### Endpoints Used
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Authenticate user
- `GET /api/expenses` - Get user's expenses
- `POST /api/expenses` - Create new expense
- `DELETE /api/expenses/<id>` - Delete expense
- `GET /api/expenses/balance` - Get balance summary
- `GET /api/auth/verify` - Verify JWT token

See `src/services/api.js` for complete API service implementation.

## 🎯 Development Workflow

### Running Both Frontend and Backend

**Terminal 1 - Backend:**
```bash
cd backend
python app.py
```

**Terminal 2 - Frontend:**
```bash
cd frontend-react
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Making Changes
- Frontend changes hot reload automatically
- Backend changes require Flask restart (or use Flask debug mode)
- API changes require updating `src/services/api.js`

## 🏗️ Building for Production

1. Build the React app:
```bash
npm run build
```

2. Output will be in `dist/` folder

3. Flask backend is configured to serve the build from this folder in production mode

## 🐛 Common Issues

### CORS Errors
- Ensure Flask backend has Flask-CORS installed
- Check `backend/api/__init__.py` has CORS enabled
- Verify Vite proxy configuration in `vite.config.js`

### Authentication Issues
- Check localStorage for `token` key
- Verify JWT token format
- Check token expiration
- Ensure backend `/api/auth/verify` endpoint works

### API Connection Failed
- Confirm Flask backend is running on port 5000
- Check Vite proxy configuration
- Look for CORS-related errors in browser console

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [Axios Documentation](https://axios-http.com/)

## 🤝 Integration with Backend

This frontend is designed to work with the PotShare Flask backend. See the main project README for full setup instructions.

---

**Note:** This is a learning project focused on Flask/Python backend development. The React frontend allows you to focus on backend concepts while having a professional frontend interface.
