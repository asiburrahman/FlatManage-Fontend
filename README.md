# 🏢 ManageFlat

**ManageFlat** is a full-featured apartment management platform built with **React**, **Firebase**, **MongoDB**, and **Express.js**, styled using **Tailwind CSS** and **DaisyUI** — designed to streamline apartment bookings, rent payments, and community announcements for users, members, and admins.

🌍 **Live Demo:** [https://manageflat-8f1f4.web.app](https://manageflat-8f1f4.web.app)

---

## 🚀 Project Overview

ManageFlat enables smooth communication between building admins and residents. It offers features like digital rent payments, member agreements, announcements, role-based dashboards, and coupon-based discounts — helping to bring building management online.

---

## 🎯 Core Features

✅ **Firebase Authentication** — Login/signup with Email or Google  
👥 **Role-based Dashboard** — Admin, Member, and User-specific features  
🏠 **Digital Apartment Booking** — Request and manage agreements  
💳 **Stripe Integration** — Secure rent payment with transaction ID tracking  
🎟️ **Coupon Discounts** — Apply coupons for rent discounts  
📜 **View Announcements** — Stay updated with the latest building news  
📆 **Monthly Rent Summary** — Payment history with month tags  
📍 **React Leaflet Map** — Shows building location  
🛠️ **Protected Routes & Middleware** — Ensures data integrity  
📲 **Fully Responsive** — Optimized for mobile and desktop  
📢 **Real-time Feedback** — Toastify + SweetAlert2 for notifications

---

## 📁 Folder Structure

```
├── backend/
│   ├── index.js
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── layout/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── context/AuthContext.jsx
│   │   ├── firebase/config.js
│   │   └── App.jsx
└── README.md
```

---

## 📦 NPM Packages Used

### 🔹 Frontend

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "react-router": "^7.5.2",
  "firebase": "^11.6.1",
  "axios": "^1.9.0",
  "tailwindcss": "^4.1.7",
  "daisyui": "^5.0.28",
  "swiper": "^11.2.6",
  "react-toastify": "^11.0.5",
  "sweetalert2": "^11.21.2",
  "react-hook-form": "^7.60.0",
  "react-icons": "^5.5.0",
  "react-leaflet": "^5.0.0",
  "react-countup": "^6.5.3"
}
```

### 🔹 Backend

```json
{
  "express": "^5.1.0",
  "cors": "^2.8.5",
  "dotenv": "^16.5.0",
  "firebase-admin": "^13.4.0",
  "mongodb": "^6.16.0",
  "stripe": "^18.3.0"
}
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
STRIPE_API_KEY=your_stripe_key
FB_SERVICE_KEY=your_base64_encoded_service_account_json
PORT=3000
```

Start server:
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
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 🌐 API Endpoints

| Method | Endpoint                          | Description                            |
|--------|-----------------------------------|----------------------------------------|
| GET    | `/admin/coupons`                  | Get all coupons                        |
| PATCH  | `/admin/remove-member/:email`     | Demote a member                        |
| GET    | `/user/:email`                    | Get user by email                      |
| POST   | `/create-payment-intent`          | Stripe payment intent                  |
| POST   | `/payment`                        | Save payment record                    |
| GET    | `/payments/:email`                | Get payment history by email           |
| PATCH  | `/agreement/approve/:id`          | Approve user agreement request         |

---

## 🖼️ Screenshots

📌 _Replace with your real images_:

- 🏠 **Home Page**
- 💳 **Stripe Payment**
- 📊 **Admin Dashboard**
- 🧾 **Payment History**
- 📣 **Announcements**

---

## 💡 Future Enhancements

- 🔔 Real-time Notification System  
- 📥 Auto-Generated PDF Invoice  
- 🏘️ Apartment Vacancy Manager  
- 🔁 Role Change Request System  

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

If you found this project useful, please **star ⭐ the repo**, **share it**, and feel free to **contribute**!