# 📸 Memory Vault

**Memory Vault** is a full-stack **MERN application** that helps users digitally preserve their memories — just like framing photos on walls or sticking them on a fridge, but in a **secure, personal, and interactive digital space**.

Users can log in, create memory stories with images, descriptions, dates, and locations, mark their favorite memories, and manage their personal profile — all in one place.

---

## 🌟 Project Overview

Whenever we visit beautiful places or experience special moments, we capture photos. Over time, these memories get lost in phone galleries.

**Memory Vault** solves this by allowing users to turn photos into **stories**, storing not just images but also the emotions and experiences behind them.

Each memory becomes a **story card** that can be:
- Edited
- Deleted
- Searched
- Marked as a favorite ❤️

## 🔗 Live Demo
👉 **Live Link:** https://memory-vault-frontend-site.onrender.com

---

---

## ✨ Key Features

### 🔐 Authentication & Security
- User Signup & Login (Email + Password)
- JWT Authentication
- Secure password hashing using **bcrypt**
- Protected routes for authenticated users
- Logout functionality

---

### 🏠 Home (Stories)
- Create a story with:
  - Title
  - Image (stored in **Cloudinary**)
  - Memory date
  - Location (text-based)
  - Long-form description (experience)
- View all stories sorted by **latest memory date**
- Edit & delete stories
- Mark / unmark stories as favorites ❤️
- Search stories by **title**

---

### ❤️ Favorites
- Dedicated Favorites page
- Displays only liked stories

---

### 👤 Profile
- Private profile (visible only to logged-in user)
- Update:
  - Username
  - Profile picture
  - About me
  - Hobbies
  - Favorite things to do
- Email is **read-only** (for security)

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🎨 Tailwind CSS
- 🔁 React Router
- 🧠 Redux Toolkit
- 🔔 React Hot Toast
- 🌐 REST API integration

---

### Backend
- 🟢 Node.js
- 🚀 Express.js
- 🗄️ MongoDB + Mongoose
- 🔐 JWT Authentication
- 🔒 bcryptjs for password hashing
- ☁️ Cloudinary for image storage
- 📂 MVC Architecture  
  *(Models, Controllers, Routes, Middlewares)*

---

### Database
- MongoDB Atlas

---

## 📸 Screenshots

### Login Page
![Login Page](/memo-pictures/login.png)

### Home Page
![Home Page](/memo-pictures/home.png)

### Profile Page
![Home Page](/memo-pictures/profile.png)

---
## ⚙️ Installation & Setup

### 📥 Clone the Repository
```bash
git clone https://github.com/your-username/memory-vault.git
cd memory-vault
```
### 🖥️ Backend Setup
```bash
cd backend
npm install
npm run dev
```
### 🌐 Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
### 📌 Environment Variables
```bash
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_key
CLOUDINARY_API_SECRET=your_secret
```

## 👨‍💻 Author
**Athmakuru Kavya**  
Aspiring MERN Stack Developer
