const Sequelize = require('sequelize');
const db = require('../util/database');

const Announcement = db.define('announcements',{
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
  authorId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
});

module.exports = Announcement;