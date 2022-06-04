const Sequelize = require('sequelize');
const db = require('../util/database');

const StudentClub = db.define('student_clubs',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  chairman: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  consultant: {
    type: Sequelize.STRING,
    allowNull: false
  },
  presentation: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = StudentClub;