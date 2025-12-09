// controllers/postController.js
const Post = require("../models/Post");
const Author = require("../models/Author");

// Create Post (POST /posts)
exports.createPost = async (req, res) => {
  try {
    const author = await Author.findByPk(req.body.author_id);
    if (!author)
      return res.status(400).json({ error: "Author does not exist" });

    const post = await Post.create(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all posts (GET /posts?author_id=)
exports.getPosts = async (req, res) => {
  const filter = {};
  if (req.query.author_id) {
    filter.author_id = req.query.author_id;
  }

  const posts = await Post.findAll({
    where: filter,
    include: Author, // include author details
  });

  res.json(posts);
};

// Get single post (GET /posts/:id)
exports.getPost = async (req, res) => {
  const post = await Post.findByPk(req.params.id, { include: Author });
  if (!post) return res.status(404).json({ error: "Post not found" });

  res.json(post);
};

// Update post (PUT /posts/:id)
exports.updatePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  await post.update(req.body);
  res.json(post);
};

// Delete post (DELETE /posts/:id)
exports.deletePost = async (req, res) => {
  const post = await Post.findByPk(req.params.id);
  if (!post) return res.status(404).json({ error: "Post not found" });

  await post.destroy();
  res.status(204).send();
};
