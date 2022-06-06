const Meal = require('../models/meal');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAll = async (req, res, next) => {
  try {
    const all = await Meal.findAll();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const meal = await Meal.findByPk(req.params.id);
    return res.status(200).json(meal);
  } catch (error) {
    return res.status(500).json(error);
  }
};

var createOne = async (meal) => {
  const mealModel = {
    date: meal.date,
    breakfast: meal.breakfast,
    lunch: meal.lunch,
    dinner: meal.dinner,
    calori: meal.calori
  };

  try {
    const meal = await Meal.create(mealModel);
    return meal;
  } catch (error) {
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const mealModel = {
      date: req.body.date,
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      dinner: req.body.dinner,
      calori: req.body.calori
    };

    try {
      const meal = await Meal.update(mealModel, { where: { id: req.params.id } });
      return res.status(200).json(meal);
    } catch (error) { }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const meal = await Meal.destroy({ where: { id: req.params.id } });
    return res.status(200).json(meal);
  } catch (error) {
    return res.status(500).json(error);
  }
};



exports.getWeek = async (req, res, next) => {
  try {
    const meal = await Meal.find(req.params.date);
    return res.status(200).json(meal);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createWeek = async (req, res, next) => {
  try {
    var mealList=[];
    try {
      req.body.map(i => {
        mealList.add(createOne(i));
      });
      return res.status(200).json(mealList);
    } catch (error) { }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateWeek = async (req, res, next) => {
  try {
    const mealModel = {
      date: req.body.date,
      breakfast: req.body.breakfast,
      lunch: req.body.lunch,
      dinner: req.body.dinner,
      calori: req.body.calori
    };

    try {
      const meal = await Meal.update(mealModel, { where: { id: req.params.id } });
      return res.status(200).json(meal);
    } catch (error) { }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteWeek = async (req, res, next) => {
  try {
    const meal = await Meal.destroy({ where: { id: req.params.id } });
    return res.status(200).json(meal);
  } catch (error) {
    return res.status(500).json(error);
  }
};
