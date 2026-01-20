/**
 * API Service - Simple version for learning!
 * 
 * This file will grow as you build your Flask backend.
 * For now, it's just a simple axios setup.
 */
import axios from 'axios';

// Your Flask backend URL
const API_BASE_URL = 'http://127.0.0.1:5000/api';

// Create a simple axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Export it so your components can use it
export default api;

/*
 * 📚 HOW TO USE THIS:
 * 
 * In your React components, you can now make API calls like:
 * 
 * import api from './services/api';
 * 
 * // GET request
 * const response = await api.get('/hello');
 * console.log(response.data);
 * 
 * // POST request
 * const response = await api.post('/login', {
 *   email: 'john@example.com',
 *   password: 'password123'
 * });
 * console.log(response.data);
 * 
 * 
 * 🎯 AS YOU BUILD YOUR BACKEND, YOU'LL ADD:
 * 
 * 1. Auth token interceptor (Step 11)
 * 2. Error handling (Step 12)
 * 3. Service functions (Step 17)
 * 
 * For now, keep it simple!
 */
