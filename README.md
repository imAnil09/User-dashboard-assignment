# User Management Dashboard

## Two Separate Assignments

This repository contains two separate assignments:

- **Frontend Assignment** — React-based User Management Dashboard using JSONPlaceholder.
- **Backend Assignment** — User Management REST API using Node.js, Express.js, MongoDB, and Mongoose.

## Project Structure

    User-dashboard-assignment/
    ├── Frontend/
    ├── Backend/
    └── README.md

## Tech Stack

### Frontend

- React (functional components with hooks)
- Axios
- React Router DOM
- Tailwind CSS

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS

## Features

- View all users
- View user details
- Create a new user
- Update user details
- Delete a user
- Form validation
- API error handling
- Responsive dashboard interface

## Getting Started

Clone the repository:

    git clone <YOUR_GITHUB_REPOSITORY_URL>

Navigate to the project:

    cd User-dashboard-assignment

## Frontend

Navigate to the frontend:

    cd Frontend

Install dependencies:

    npm install

Start the frontend:

    npm run dev

## Backend

Navigate to the backend:

    cd Backend

Install dependencies:

    npm install

Create a `.env` file in the Backend directory:

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string

Start the backend:

    npm run dev

The backend API will run at:

    http://localhost:3000

## Backend API

The backend provides the following REST API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/users` | Get all users |
| GET | `/api/users/:id` | Get a user by ID |
| POST | `/api/users` | Create a new user |
| PUT | `/api/users/:id` | Update a user |
| DELETE | `/api/users/:id` | Delete a user |

For detailed backend setup instructions and API examples, see:

    Backend/README.md

## Environment Variables

The backend requires the following environment variables:

    PORT=3000
    MONGODB_URI=your_mongodb_connection_string

The actual `.env` file should not be committed to the repository.

## Assignment

This repository contains two separate assignments:

### Frontend

- React functional components with hooks
- API integration using Axios or Fetch API
- React Router DOM
- Tailwind CSS
- JSONPlaceholder API

### Backend

- RESTful API development
- CRUD operations
- MongoDB database integration
- Mongoose validation
- Centralized error handling
- Modular project structure