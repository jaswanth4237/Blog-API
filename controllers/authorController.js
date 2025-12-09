// controllers/authorController.js
const Author = require("../models/Author");
const Post = require("../models/Post");

// Create Author  (POST /authors)
exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all authors (GET /authors)
exports.getAuthors = async (req, res) => {
  const authors = await Author.findAll();
  res.json(authors);
};

// Get one author by id (GET /authors/:id)
exports.getAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.status(404).json({ error: "Author not found" });
  res.json(author);
};

// Update author (PUT /authors/:id)
exports.updateAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.status(404).json({ error: "Author not found" });

  await author.update(req.body);
  res.json(author);
};

// Delete author (DELETE /authors/:id)
exports.deleteAuthor = async (req, res) => {
  const author = await Author.findByPk(req.params.id);
  if (!author) return res.status(404).json({ error: "Author not found" });

  await author.destroy(); // cascade deletes posts
  res.status(204).send();
};

// Get posts of an author (GET /authors/:id/posts)
exports.getAuthorPosts = async (req, res) => {
  const posts = await Post.findAll({ where: { author_id: req.params.id } });
  res.json(posts);
};
