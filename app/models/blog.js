const Sequelize = require('sequelize');
const db = require('../util/database');
const multer= require('multer');

const Blog = db.define('blogs',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  image: {
    type: Sequelize.STRING,
  },
  header: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  authorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  //approved, waiting, declined, draft
  status: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'waiting'
  },
  rejectReason:{
    type: Sequelize.STRING,
  }


});

module.exports = Blog;