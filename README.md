# 📘 Blog API – Node.js + Express + MySQL + Sequelize

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
git clone https://github.com/YOUR_USERNAME/blog-api.git
cd blog-api
