# Installation & Setup Guide

Complete guide to set up and run AgriConnect locally.

## Prerequisites

- **Node.js:** 14 or higher (for frontend and backend)
- **npm:** 6 or higher
- **Git**

## Frontend Setup (React + Vite)

Open a **new terminal** and follow these steps:

### Step 1: Navigate to Frontend Directory

```powershell
cd AgriConnect-WebApp
```

### Step 2: Install Dependencies

```powershell
npm install
```

### Step 3: Run Development Server

```powershell
npm run dev
```

**Expected Output:**

```
VITE v... dev server running at:
  ➜  Local:   http://127.0.0.1:5173/
```

**Frontend URL:** http://localhost:5173

---

## Backend Setup (Node.js)

For the Node.js backend services, open **another terminal**:

### Step 1: Navigate to Backend Directory

```powershell
cd AgriConnect-WebApp/backend
```

### Step 2: Install Dependencies

```powershell
npm install
```

### Step 3: Create `.env` File

Copy the example environment file and configure it:

```powershell
cp .env.example .env
```

Then edit `.env` with your configuration:

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

**Note:** See `.env.example` for all available configuration options.

### Step 4: Run Backend Server

```powershell
npm run dev
```

---

## Complete Setup Summary

You should now have **2 servers running**:

| Server          | URL                   | Purpose        |
| --------------- | --------------------- | -------------- |
| React Frontend  | http://localhost:5173 | Web Interface  |
| Node.js Backend | http://localhost:5000 | Business Logic |

---

## Troubleshooting

### Port Already in Use

**For React:**

```powershell
npm run dev -- --port 3001
```

### npm Install Issues

```powershell
# Clear cache and reinstall
npm cache clean --force
npm install
```

---

## Environment Variables

Create `.env` files as needed:

**AgriConnect-WebApp/.env (React):**

```
VITE_BACKEND_URL=http://localhost:5000
```

**AgriConnect-WebApp/backend/.env (Node.js):**

```
MONGODB_URI=mongodb+srv://...
JWT_SECRET=your_secret_key
```

---

## Need Help?

- Create an issue on GitHub
- Check existing issues for solutions
- Join discussions for questions

Happy coding! 🚀
