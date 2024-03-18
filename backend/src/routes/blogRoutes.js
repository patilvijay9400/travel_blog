const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Create a new blog post
router.post('/create', blogController.create);

// Get all blog posts
router.get('/', blogController.getAll);

// Get a specific blog post by ID
router.get('/:id', blogController.getById);

// Update a blog post by ID
router.put('/:id', blogController.updateById);

// Delete a blog post by ID
router.delete('/:id', blogController.deleteById);

module.exports = router;
