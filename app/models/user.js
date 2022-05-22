const Sequelize = require('sequelize');
const db = require('../util/database');

const User = db.define('users',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  //admin, other
  role: {
      type: Sequelize.STRING,
      allowNull: false
  }

});

module.exports = User;