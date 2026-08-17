# User Management REST API

A RESTful User Management API built with Node.js, Express.js, MongoDB, and Mongoose for a dashboard application.

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## Features

- Create a new user
- Retrieve all users
- Retrieve a single user by ID
- Update an existing user
- Delete a user
- Mongoose schema validation
- Unique email validation
- Centralized error handling
- Proper HTTP status codes
- CORS enabled for frontend integration

## Project Structure

    src/
    ├── config/
    │   └── database.js
    ├── constants/
    │   └── httpStatus.js
    ├── controllers/
    │   └── user.controller.js
    ├── middleware/
    │   └── errorHandler.js
    ├── models/
    │   └── User.model.js
    ├── routes/
    │   └── user.routes.js
    └── server.js

## Getting Started

### Prerequisites

Make sure the following are installed:

- Node.js
- npm
- MongoDB

### Installation

Clone the repository:

    git clone <YOUR_GITHUB_REPOSITORY_URL>

Navigate to the backend directory:

    cd Backend

Install dependencies:

    npm install

### Environment Variables

Create a `.env` file in the project root:

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string

You can refer to `.env.example` for the required environment variables.

> Do not commit your actual `.env` file or database credentials to the repository.

### Run the Application

Start the development server:

    npm run dev

The API will be available at:

    http://localhost:3000

## API Endpoints

Base URL:

    http://localhost:3000/api/users

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a user by ID |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

---

## 1. Get All Users

### Request

    GET /api/users

### Response

    [
      {
        "_id": "64f000000000000000000000",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "9876543210",
        "company": "Example Company",
        "address": {
          "city": "Hyderabad",
          "zipcode": "500001",
          "geo": {
            "lat": 17.385,
            "lng": 78.4867
          }
        }
      }
    ]

Status: `200 OK`

---

## 2. Get User by ID

### Request

    GET /api/users/:id

### Successful Response

    {
      "_id": "64f000000000000000000000",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "9876543210",
      "company": "Example Company",
      "address": {
        "city": "Hyderabad",
        "zipcode": "500001",
        "geo": {
          "lat": 17.385,
          "lng": 78.4867
        }
      }
    }

Status: `200 OK`

### User Not Found

    {
      "message": "User not found"
    }

Status: `404 Not Found`

### Invalid ID

    {
      "message": "Invalid user ID"
    }

Status: `400 Bad Request`

---

## 3. Create a User

### Request

    POST /api/users
    Content-Type: application/json

### Request Body

    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "9876543210",
      "company": "Example Company",
      "address": {
        "city": "Hyderabad",
        "zipcode": "500001",
        "geo": {
          "lat": 17.385,
          "lng": 78.4867
        }
      }
    }

### Response

    {
      "_id": "64f000000000000000000000",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "9876543210",
      "company": "Example Company",
      "address": {
        "city": "Hyderabad",
        "zipcode": "500001",
        "geo": {
          "lat": 17.385,
          "lng": 78.4867
        }
      }
    }

Status: `201 Created`

### Validation Error

    {
      "message": "Name must be at least 2 characters, Please provide a valid email address"
    }

Status: `400 Bad Request`

### Duplicate Email

Email addresses must be unique.

    {
      "message": "Email already exists"
    }

Status: `409 Conflict`

---

## 4. Update a User

### Request

    PUT /api/users/:id
    Content-Type: application/json

### Request Body

    {
      "name": "John Updated",
      "email": "john.updated@example.com",
      "phone": "9999999999",
      "company": "Updated Company",
      "address": {
        "city": "Hyderabad",
        "zipcode": "500002",
        "geo": {
          "lat": 17.4,
          "lng": 78.5
        }
      }
    }

### Response

    {
      "_id": "64f000000000000000000000",
      "name": "John Updated",
      "email": "john.updated@example.com",
      "phone": "9999999999",
      "company": "Updated Company",
      "address": {
        "city": "Hyderabad",
        "zipcode": "500002",
        "geo": {
          "lat": 17.4,
          "lng": 78.5
        }
      }
    }

Status: `200 OK`

### User Not Found

    {
      "message": "User not found"
    }

Status: `404 Not Found`

---

## 5. Delete a User

### Request

    DELETE /api/users/:id

### Response

    {
      "message": "User deleted successfully"
    }

Status: `200 OK`

### User Not Found

    {
      "message": "User not found"
    }

Status: `404 Not Found`

---

## HTTP Status Codes

| Status Code | Meaning |
|-------------|---------|
| `200` | Request completed successfully |
| `201` | Resource created successfully |
| `400` | Invalid request, validation error, or invalid user ID |
| `404` | User not found |
| `409` | Duplicate email |
| `500` | Internal server error |

## Validation

User data is validated using Mongoose schema validation.

The following fields are required:

- Name
- Email
- Phone
- Company
- City
- Zipcode
- Latitude
- Longitude

Email addresses must follow a valid email format and must be unique.

## Error Handling

The API uses centralized error handling middleware to provide consistent error responses for:

- Mongoose validation errors
- Invalid MongoDB ObjectIds
- Duplicate email addresses
- Resource not found
- Unexpected server errors

Example:

    {
      "message": "Invalid user ID"
    }

## CORS

CORS is enabled to allow the frontend dashboard application to communicate with the API.

## Postman

All API endpoints can be tested using Postman.

The following operations are supported:

- Get all users
- Get user by ID
- Create user
- Update user
- Delete user
