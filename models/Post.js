// models/Post.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const Author = require("./Author");

const Post = sequelize.define("Post", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
});

// One Author → Many Posts
Author.hasMany(Post, {
  foreignKey: "author_id",
  onDelete: "CASCADE",  // if author deleted → posts deleted
});
Post.belongsTo(Author, { foreignKey: "author_id" });

module.exports = Post;
