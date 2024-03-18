const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./user'); 
const BlogPost = require('./blogPost');

const Comment = sequelize.define('Comment', {
  comment_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: BlogPost,
      key: 'post_id'
    }
  },
  author_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'user_id'
    }
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, {
  tableName: 'comments',
  timestamps: false
});

module.exports = Comment;
