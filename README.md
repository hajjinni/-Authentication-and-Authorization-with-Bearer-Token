# User Authentication API

## Project Description

This project implements user authentication and authorization using Bearer Tokens (JWT). It allows users to register, log in, and access protected routes securely.

The application is built using Node.js, Express.js, MongoDB, and Mongoose following the MVC architecture.

---

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs
* Postman

---

## Features

* User Registration with password hashing
* User Login with JWT token generation
* Protected routes using Bearer Token
* Middleware for token verification
* MVC architecture
* API documentation using Postman

---

## Project Structure

config/
controllers/
models/
routes/
middleware/

---

## Installation

1. Clone the repository

git clone <repo-url>

2. Install dependencies

npm install

3. Create .env file

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Run the server

npm run dev

---

## API Endpoints

| Method | Endpoint           | Description                  |
| ------ | ------------------ | ---------------------------- |
| POST   | /api/auth/register | Register a user              |
| POST   | /api/auth/login    | Login user                   |
| GET    | /api/auth/profile  | Get user profile (Protected) |

---

## Authentication

This API uses JWT Bearer Token.

Example:

Authorization: Bearer <your_token>

---

## Postman Documentation

All APIs are tested and documented using Postman with sample requests and responses.

---

## Deployment

The application is deployed using Render and connected to MongoDB Atlas.


