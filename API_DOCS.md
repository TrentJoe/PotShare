# PotShare API Documentation

## Base URL
```
http://127.0.0.1:5000/api
```

## Authentication

Most endpoints require JWT authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

Tokens are returned from `/auth/register` and `/auth/login` endpoints.

## Endpoints

### Health Check

#### GET `/api/health`
Check if API is running.

**Response:**
```json
{
  "status": "healthy",
  "version": "1.0.0"
}
```

---

## Authentication Routes

### Register User

#### POST `/api/auth/register`
Create a new user account.

**Request Body:**
```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

**Errors:**
- `400`: Missing fields or validation error
- `409`: Username or email already exists

---

### Login

#### POST `/api/auth/login`
Authenticate user and receive JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

**Errors:**
- `400`: Missing credentials
- `401`: Invalid email or password

---

### Request Password Reset

#### POST `/api/auth/request-reset`
Send password reset email.

**Request Body:**
```json
{
  "email": "john@example.com"
}
```

**Response (200):**
```json
{
  "message": "If the email exists, a reset link has been sent"
}
```

---

### Reset Password

#### POST `/api/auth/reset-password`
Reset password using token from email.

**Request Body:**
```json
{
  "token": "reset-token-from-email",
  "password": "newpassword123"
}
```

**Response (200):**
```json
{
  "message": "Password updated successfully"
}
```

**Errors:**
- `400`: Invalid token or validation error

---

### Verify Token

#### GET `/api/auth/verify`
Check if current JWT token is valid.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "valid": true,
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com"
  }
}
```

**Errors:**
- `401`: Invalid or expired token

---

## Expense Routes

### Get User Expenses

#### GET `/api/expenses/`
Get all expenses for authenticated user.

**Query Parameters:**
- `limit` (optional): Maximum number of expenses to return

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "expenses": [
    {
      "id": 1,
      "description": "Dinner",
      "amount": 60.00,
      "date": "2025-01-20",
      "split_with": "2,3",
      "group_name": "Friends",
      "payer_id": 1,
      "payer_name": "johndoe",
      "created_at": "2025-01-20 10:30:00"
    }
  ]
}
```

---

### Create Expense

#### POST `/api/expenses/`
Create a new expense.

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "description": "Dinner at restaurant",
  "amount": 60.00,
  "date": "2025-01-20",
  "split_with": "2,3",
  "group_name": "Friends"
}
```

**Response (201):**
```json
{
  "message": "Expense created successfully",
  "expense": {
    "id": 1,
    "description": "Dinner at restaurant",
    "amount": 60.00,
    "date": "2025-01-20",
    "split_with": "2,3",
    "group_name": "Friends",
    "payer_id": 1
  }
}
```

**Errors:**
- `400`: Missing fields or validation error
- `401`: Unauthorized

---

### Get Expense by ID

#### GET `/api/expenses/<id>`
Get specific expense details.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "expense": {
    "id": 1,
    "description": "Dinner",
    "amount": 60.00,
    "date": "2025-01-20",
    "split_with": "2,3",
    "group_name": "Friends",
    "payer_id": 1
  }
}
```

**Errors:**
- `404`: Expense not found

---

### Delete Expense

#### DELETE `/api/expenses/<id>`
Delete an expense (only if you're the payer).

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "message": "Expense deleted successfully"
}
```

**Errors:**
- `403`: Not authorized to delete this expense
- `404`: Expense not found

---

### Get Balance Summary

#### GET `/api/expenses/balance`
Get user's balance summary.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "balance": {
    "owes": 25.50,
    "is_owed": 40.00,
    "net_balance": 14.50
  }
}
```

---

## User Routes

### Get All Users

#### GET `/api/users/`
Get list of all users (for split-with dropdown).

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "users": [
    {
      "id": 1,
      "username": "johndoe",
      "email": "john@example.com"
    },
    {
      "id": 2,
      "username": "janedoe",
      "email": "jane@example.com"
    }
  ]
}
```

---

### Get Current User

#### GET `/api/users/me`
Get authenticated user's information.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "john@example.com",
    "created_at": "2025-01-15 09:00:00"
  }
}
```

---

### Get User by ID

#### GET `/api/users/<id>`
Get public info for specific user.

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "user": {
    "id": 2,
    "username": "janedoe"
  }
}
```

**Errors:**
- `404`: User not found

---

## HTTP Status Codes

- `200` - OK: Request successful
- `201` - Created: Resource created successfully
- `400` - Bad Request: Invalid input or validation error
- `401` - Unauthorized: Missing or invalid authentication token
- `403` - Forbidden: Authenticated but not authorized for this action
- `404` - Not Found: Resource doesn't exist
- `409` - Conflict: Resource already exists (e.g., duplicate email)
- `500` - Internal Server Error: Server-side error

## Error Response Format

All errors return JSON in this format:

```json
{
  "error": "Error message describing what went wrong"
}
```

## Testing with curl

### Register:
```bash
curl -X POST http://127.0.0.1:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","email":"test@example.com","password":"password123"}'
```

### Login:
```bash
curl -X POST http://127.0.0.1:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### Create Expense:
```bash
curl -X POST http://127.0.0.1:5000/api/expenses/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"description":"Lunch","amount":25.50,"date":"2025-01-20","split_with":"2"}'
```

### Get Balance:
```bash
curl -X GET http://127.0.0.1:5000/api/expenses/balance \
  -H "Authorization: Bearer YOUR_TOKEN"
```

---

**Note**: Replace `YOUR_TOKEN` with the actual JWT token received from login/register.
