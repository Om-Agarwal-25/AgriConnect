# AgriConnect - Digital Farming Platform

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

AgriConnect is a multilingual digital farming platform connecting farmers with retailers and buyers. It offers a marketplace, smart farming tools, crop calendar, government schemes access, and chatbot support — all within a modern, responsive, and farmer-friendly interface.

## 📋 Prerequisites

- **Node.js:** 14 or higher
- **npm:** 6 or higher
- **Git**

## 🚀 Installation & Setup

### 1. Frontend (React)

In a terminal window:

```powershell
cd AgriConnect-WebApp
npm install
npm run dev
```

The frontend will open at: **http://localhost:3000** (or similar port)

### 2. Backend (Node.js)

In another terminal window:

```powershell
cd AgriConnect-WebApp/backend
npm install
npm run dev
```

The backend server will run on **http://localhost:5000**

## 📁 Project Structure

```
AgriConnect/
├── AgriConnect-WebApp/      # Main Web Application
│   ├── backend/             # Node.js Backend
│   ├── src/                 # React Frontend Source
│   ├── public/
│   └── package.json
└── README.md                # This file
```

## 🌐 Accessing the Application

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000

## ✨ Features

### For Farmers

- 📊 **Dashboard** - Real-time weather, earnings tracking, and soil moisture monitoring
- 🌾 **Crop Recommendations** - AI-powered suggestions based on soil, climate, and resources
- 🐛 **Disease Detection** - Upload crop images for pest and disease identification
- 📅 **Crop Calendar** - Seasonal planning and activity tracking
- 🏪 **Marketplace** - Sell products directly to buyers
- 💬 **AI ChatBot** - 24/7 farming assistance in multiple languages
- 🏛️ **Government Schemes** - Access to subsidies and programs

### For Buyers

- 🛒 **Marketplace** - Browse and purchase fresh produce directly from farmers
- 📦 **Order Management** - Track orders and manage logistics
- 💳 **Secure Payments** - Integrated payment processing
- 📊 **Analytics** - Purchase history and spending insights

### Multi-Language Support

- English, Hindi

## 🖼️ Screenshots

- Login Page - AgriConnect\screenshots\Login-page.png
- Farmer Dashboard - AgriConnect\screenshots\Farmer-Dashboard.png
- Buyer Dashboard - AgriConnect\screenshots\Buyer-Dashboard.png
- Marketplace - AgriConnect\screenshots\Marketplace.png
- Mobile View - AgriConnect\screenshots\Mobile-View.png

## 🛠️ Tech Stack

**Frontend:**

- React 18.3.1 with Vite
- TailwindCSS for styling
- Radix UI components
- Framer Motion for animations
- React Router for navigation
- Leaflet for maps
- Recharts for data visualization

**Backend:**

- Node.js with Express
- MongoDB with Mongoose
- JWT authentication
- bcryptjs for password hashing

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Contributing

Contributions welcome! Please submit pull requests or report issues.
