const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); // Assuming you have a User model defined in './User.js'

// BlogPost Model
const BlogPost = sequelize.define('BlogPost', {
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: User, // Reference to the User model
      key: 'user_id'
    }
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: true
  }
}, {
  tableName: 'blogposts', // Optional: Set the table name explicitly if it's different from the model name
  timestamps: false // Optional: Disable timestamps if you don't want Sequelize to manage created_at and updated_at fields
});

module.exports = BlogPost;
