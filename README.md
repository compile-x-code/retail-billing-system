# 🛒 Retail Billing System (Full-Stack Project)

A full-stack web application built using **Spring Boot, React, and MySQL** to manage retail billing operations like product management, pricing, and inventory.

---

## 🚀 Tech Stack

### 🔹 Backend

* Spring Boot (REST API)
* Spring Data JPA (Hibernate)
* MySQL Database
* Maven

### 🔹 Frontend

* React (Vite)
* Axios (API calls)
* CSS (Styling)

---

## 📁 Project Structure

```
retail-billing-system/
│
├── backend/
│   ├── src/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── entity/
│   │   └── RetailApplication.java
│   ├── resources/
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 🔹 1. Clone Repository

```
git clone https://github.com/compile-x-code/retail-billing-system.git
cd retail-billing-system
```

---

### 🔹 2. Setup Database (MySQL)

```
CREATE DATABASE retail_db;
```

Update `application.properties`:

```
spring.datasource.url=jdbc:mysql://localhost:3306/retail_db
spring.datasource.username=root
spring.datasource.password=yourpassword
```

---

### 🔹 3. Run Backend (Spring Boot)

```
cd backend
mvn clean install
mvn spring-boot:run
```

Backend will run at:

```
http://localhost:8080
```

---

### 🔹 4. Run Frontend (React)

```
cd frontend
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| GET    | /api/products      | Get all products |
| POST   | /api/products      | Add new product  |
| DELETE | /api/products/{id} | Delete product   |

---

## 🎯 Features

* Add products
* View product list
* Delete products
* Full CRUD backend
* REST API integration
* Real-time UI updates

---

## 🧪 Testing

* API tested using Postman
* Manual UI testing via browser

---

## 🚧 Future Enhancements

* JWT Authentication
* Shopping Cart
* Order & Billing System
* Admin Dashboard
* Search & Filters

---

## 💡 Learning Outcomes

* Full-stack development (Spring Boot + React)
* REST API design
* Database integration with JPA
* Frontend-backend integration
* Project structuring and version control

---

## 👨‍💻 Author

**Anurag Tiwari**

---

## ⭐ Contribution

Feel free to fork this repo and improve it!

---
