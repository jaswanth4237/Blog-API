// app.js
const express = require("express");
const app = express();
const sequelize = require("./config/db");

// load models so associations are applied
require("./models/Author");
require("./models/Post");

app.use(express.json());

// test DB connection and sync tables
sequelize
  .sync() // you can use { alter: true } during development
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("DB sync error:", err));

// routes
app.use("/authors", require("./routes/authorRoutes"));
app.use("/posts", require("./routes/postRoutes"));

module.exports = app;
