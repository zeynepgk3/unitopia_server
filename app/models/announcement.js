const Sequelize = require('sequelize');
const db = require('../util/database');

const Announcement = db.define('announcements',{
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
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  },
});

module.exports = Announcement;