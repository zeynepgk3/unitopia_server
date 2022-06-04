const Sequelize = require('sequelize');
const db = require('../util/database');

const Comment = db.define('blogs',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  blogId: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  announcementId:{
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  comment: {
    type: Sequelize.TEXT,
    allowNull: false
  },

});

module.exports = Comment;