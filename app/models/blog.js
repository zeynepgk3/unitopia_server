const Sequelize = require('sequelize');
const db = require('../util/database');

const Blog = db.define('blogs',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  header: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //approved, waiting, declined, draft
  status: {
      type: Sequelize.STRING,
      allowNull: false
  }

});

module.exports = Blog;