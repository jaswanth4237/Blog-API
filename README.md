# 📘 Blog API – Node.js + Express + MySQL

A simple and clean RESTful API for managing **Authors** and their **Posts**.  
This project demonstrates:

- Relational database design (One-to-Many)
- Sequelize ORM usage
- Foreign key constraints with cascade delete
- Efficient data querying & nested resource endpoints
- Standard API structure (Controllers, Routes, Models)

---

## 🚀 Features

### 👤 Author Management
- Create a new author  
- Get all authors  
- Get a single author by ID  
- Update an author  
- Delete an author (with cascade → deletes all posts)

### 📝 Post Management
- Create a post linked to an author  
- Get all posts  
- Get a single post with author details  
- Update a post  
- Delete a post  
- Get all posts of a specific author  

---

# ⚙️ **Tech Stack**

- **Node.js**
- **Express.js**
- **MySQL**
- **Sequelize ORM**
- **dotenv**
- **Nodemon** (for development)

---

# 🛠️ **Project Setup Instructions**

## 1️⃣ Clone the repository
```bash
## 2️⃣ Install dependencies
```bash
npm install
```
## 3️⃣ Create a database in MySQL
Login to MySQL:-
```bash
mysql -u root -p
```
Create the database:-
```bash
CREATE DATABASE blog_api;
```
## 4️⃣ Create .env file
```
Inside project root, create .env:-
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=blog_api
```

⚠️ .env is ignored in GitHub → use .env.example.

## 5️⃣ Start the server
```bash
npm run dev
```
Server runs at:-
```bash
http://localhost:3000
```
Expected Terminal Output:-
```bash
Database synced
Server running on http://localhost:3000
```

# 📚 API Documentation

---

## 👤 Author Routes

### ➤ Create Author  
**POST** `/authors`
```json
{
  "name": "Jaswanth",
  "email": "jaswanth@example.com"
}
```
➤ Get All Posts

GET /posts
(Includes author details)

➤ Get Post by ID

GET /posts/:id

➤ Update Post

PUT /posts/:id

➤ Delete Post

DELETE /posts/:id

➤ Get Posts of an Author

GET /authors/:id/posts


## 📊 Database Schema (ERD)

---

```
┌───────────────┐          1        ┌───────────────┐
│    Authors     │──────────────────▶│     Posts      │
└───────────────┘                   └───────────────┘
id (PK)                             id (PK)
name                                title
email (unique)                      content
createdAt                           author_id (FK)
updatedAt                           createdAt
                                    updatedAt
```
✔ One Author → Many Posts
✔ Cascade delete enabled

## 🧪 Postman Collection

---

A Postman collection (postman_collection.json) is included to test all API endpoints.

## 📂 Folder Structure

---

```
Blog-api/
├── config/
│   └── database.js
├── controllers/
│   ├── authorController.js
│   └── postController.js
├── models/
│   ├── Author.js
│   └── Post.js
├── routes/
│   ├── authorRoutes.js
│   └── postRoutes.js
├── .env.example
├── package.json
├── server.js
├── README.md
```

## 👤 Author
  **Jaswanth**
