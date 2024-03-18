const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Create a new comment
router.post('/create', commentController.createComment);

// Get all comments
router.get('/', commentController.getAllComments);

// Get comment by ID
router.get('/:id', commentController.getCommentById);

// Update comment by ID
router.put('/:id', commentController.updateCommentById);

// Delete comment by ID
router.delete('/:id', commentController.deleteCommentById);

module.exports = router;
