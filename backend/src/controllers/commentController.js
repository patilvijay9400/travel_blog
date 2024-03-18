const Comment = require('../models/comment');

// Create a new comment
const createComment = async (req, res) => {
  try {
    const { content, post_id, author_id } = req.body;
    const newComment = await Comment.create({ content, post_id, author_id });
    res.status(201).json({ message: "Comment created successfully!", comment: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating the comment");
  }
};

// Get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll();
    res.status(200).json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching comments");
  }
};

// Get comment by ID
const getCommentById = async (req, res) => {
  try {
    const commentId = req.params.id;
    const comment = await Comment.findByPk(commentId);
    if (!comment) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching comment");
  }
};

// Update comment by ID
const updateCommentById = async (req, res) => {
  try {
    const commentId = req.params.id;
    const { content } = req.body;
    const updatedComment = await Comment.update({ content }, { where: { comment_id: commentId } });
    if (updatedComment[0] === 0) {
      return res.status(404).json({ message: "Comment not found" });
    }
    res.status(200).json({ message: "Comment updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating comment");
  }
};

// Delete comment by ID
const deleteCommentById = async (req, res) => {
  try {
    const commentId = req.params.id;
    const deleted = await Comment.destroy({ where: { comment_id: commentId } });
    if (deleted) {
      return res.status(200).json({ message: "Comment deleted successfully" });
    }
    throw new Error("Comment not found");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting comment");
  }
};

module.exports = {
  createComment,
  getAllComments,
  getCommentById,
  updateCommentById,
  deleteCommentById
};
