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
    console.log("günün menüsü eklendi ", meal);
    return meal;
  } catch (error) {
    console.log("arıza çıktı ", error);
  }
  console.log("ben bittim");
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
    console.log("createWeek", req.body[1].date);
    console.log("req.body", req.body);
    var mealList=[];
    try {
      req.body.map(i => {
        console.log("oluşturulacak tarih ",i.date);
        mealList.add(createOne(i));
        console.log("MEALLIST: ",mealList);
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
