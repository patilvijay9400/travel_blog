const BlogPost = require("../models/blogPost");
const Comment = require("../models/comment");

// Create a new blog post
const create = async (req, res) => {
  try {
    const { title, content, author_id, destination, type } = req.body;
    
    // Create new blog post
    const newPost = await BlogPost.create({ title, content, author_id, destination, type });
    
    res.status(201).json({ message: "Blog post created successfully!", post: newPost });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating the blog post");
  }
};

// Get all blog posts
const getAll = async (req, res) => {
  try {
    const blogPosts = await BlogPost.findAll();
    
    res.status(200).json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching blog posts");
  }
};

// Get a specific blog post by ID
const getById = async (req, res) => {
  try {
    const postId = req.params.id;
    const blogPost = await BlogPost.findByPk(postId);
    
    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }
    
    res.status(200).json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching blog post");
  }
};

// Update a blog post by ID
const updateById = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, destination, type } = req.body;
    
    const [updated] = await BlogPost.update(
      { title, content, destination, type },
      { where: { post_id: postId } }
    );
    
    if (updated) {
      const updatedPost = await BlogPost.findByPk(postId);
      return res.status(200).json({ message: "Blog post updated successfully", post: updatedPost });
    }
    
    throw new Error("Blog post not found");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error updating blog post");
  }
};

// Delete a blog post by ID
const deleteById = async (req, res) => {
  try {
    const postId = req.params.id;

    // Delete comments associated with the blog post
    await Comment.destroy({ where: { post_id: postId } });

    // Now delete the blog post
    const deleted = await BlogPost.destroy({ where: { post_id: postId } });

    if (deleted) {
      return res.status(200).json({ message: "Blog post deleted successfully" });
    }

    throw new Error("Blog post not found");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting blog post");
  }
};


module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById
};
