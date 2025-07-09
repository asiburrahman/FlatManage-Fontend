
# 🥗 FoodNeighbor

**FoodNeighbor** is a modern community-powered food sharing platform built with **React**, **Firebase**, **MongoDB**, and **Express.js**, styled using **Tailwind CSS** and **DaisyUI** — enabling individuals to donate or request extra food responsibly and securely.

🌍 **Live Demo:** [https://foodsharing-ce4a2.web.app/](https://foodsharing-ce4a2.web.app/)

---

## 🚀 Project Overview

FoodNeighbor connects local donors with individuals or families in need of meals. With an easy-to-use interface, real-time updates, and secure request management, the platform helps reduce food waste and fight hunger — one meal at a time.

---

## 🎯 Core Features

✅ **Firebase Authentication** — Login/signup using Email or Google  
🍱 **Add & Manage Food Items** — Create, edit, or delete food listings  
📋 **Available Food Listing** — Filter/search by food name  
🔒 **AxiosSecure Integration** — Secure API communication  
📨 **Request Food** — One request per item, approved by donors  
📊 **User Dashboards** — Donors and requesters get personalized views  
📅 **Sorted by Date** — Lists most recent food first  
📍 **Pickup Info** — Location, time, and donor contact  
🌘 **Dark Mode** — Toggle via DaisyUI theme  
📲 **Fully Responsive** — Optimized for mobile and desktop  
📢 **Toast & Alerts** — Toastify + SweetAlert2 for feedback  

---

## 📁 Folder Structure

```
├── backend/
│   ├── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/AuthContext.jsx
│   │   ├── firebase/config.js
│   │   ├── hooks/useAxiosSecure.js
│   │   └── App.jsx
└── README.md
```

---

## 📦 NPM Packages Used

### 🔹 Frontend

```json
"react": "^19.0.0",
"react-dom": "^19.0.0",
"react-router-dom": "^7.5.2",
"firebase": "^11.6.1",
"tailwindcss": "^4.1.7",
"daisyui": "^5.0.28",
"axios": "^1.6.0",
"react-toastify": "^11.0.5",
"react-hook-form": "^7.45.1",
"sweetalert2": "^11.10.0",
"react-icons": "^5.5.0",
"swiper": "^11.2.6",
"react-countup": "^6.5.3"
```

### 🔹 Backend

```json
"express": "^5.1.0",
"cors": "^2.8.5",
"dotenv": "^16.5.0",
"mongodb": "^6.16.0"
```

---

## 🔧 Installation & Setup

### 🔹 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:
```ini
DB_USER=your_db_user
DB_PASS=your_db_pass
PORT=3000
```

Run the server:
```bash
node index.js
```

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Create a `.env` file:
```ini
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🌐 API Endpoints

| Method | Endpoint               | Description                          |
|--------|------------------------|--------------------------------------|
| GET    | `/availableFood`       | Get all available food items         |
| GET    | `/foodDetail/:id`      | Get details of a single food item    |
| POST   | `/food`                | Add a new food listing               |
| DELETE | `/deleteFood/:id`      | Delete a food listing                |
| GET    | `/myRequests/:email`   | View all requests by user email      |
| POST   | `/request`             | Send a request for food              |
| PATCH  | `/approveRequest/:id`  | Approve a food request               |

---

## 🖼️ Screenshots

📌 *Replace with real images*

- 🏠 **Home Page**
- 🍱 **Add Food Form**
- 📋 **Available Food List**
- 📨 **Request Form**
- 📊 **Dashboard View**

---

## 💡 Future Improvements

- 📍 **Google Maps Integration** — for better pickup coordination  
- ⏰ **Auto-expiry Timer** — for perishable food listings  
- 🌐 **Language Toggle** — English ↔ বাংলা  
- 📥 **Email/SMS Notifications** — for food status updates

---

## 👨‍💻 Author

**Asibur Rahman**  
Senior IT Officer, Shishir Knitting & Dyeing (AD Group)  
📧 [asiburrahman.dev@gmail.com](mailto:asiburrahman.dev@gmail.com)  
🌐 [LinkedIn](https://www.linkedin.com/in/asiburrahman)

---

## 📜 License

Licensed under the **MIT License**

---

## ⭐️ Show Your Support

If you like this project, please **star ⭐ the repository**, share it with others, and consider contributing!