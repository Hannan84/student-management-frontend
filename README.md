# Student Management Frontend (Vue 3 + Vite)

This is the **frontend** built with Vue 3, Vite, and Tailwind CSS to consume the Laravel API.

## Features

- Vue Router for navigation
- Axios for API requests
- Tailwind CSS for styling
- Token-based auth (via localStorage)

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/student-management-frontend.git
   cd student-management-frontend

   ```

2. Install dependencies:

   ```bash
   npm install
   npm run dev

   ```

3. Make sure the backend Laravel server is running at:
   http://localhost:8000

4. Set the correct base URL in your axios.js:
   ```bash
    axios.defaults.baseURL = "http://localhost:8000/api";
   ```
