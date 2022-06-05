const Sequelize = require('sequelize');
const db = require('../util/database');

const Meal = db.define('meals',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  image: {
    type: Sequelize.STRING,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  breakfast: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lunch: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dinner: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  calori: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Meal;