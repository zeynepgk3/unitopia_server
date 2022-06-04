const StudentClub = require('../models/student_club');

exports.getAll = async (req, res, next) => {
  try {
    const all = await StudentClub.findAll();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const studentClub = await StudentClub.findByPk(req.params.id);
    return res.status(200).json(studentClub);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  //TODO: check if authorId is not exist
  try {
    const studentClubModel = {
      name: req.body.name,
      chairman: req.body.chairman,
      consultant: req.body.consultant,
      presentation: req.body.presentation,

    };

    try {
      const studentClub = await StudentClub.create(studentClubModel);
      console.log(studentClub.name,' student club created');
      return res.status(201).json(studentClub);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const studentClubModel = {
      name: req.body.name,
      chairman: req.body.chairman,
      consultant: req.body.consultant,
      presentation: req.body.presentation,

    };

    try {
      const studentClub = await StudentClub.update(studentClubModel, { where: { id: req.params.id } });
      return res.status(200).json(studentClub);
    } catch (error) { }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const announcement = await StudentClub.destroy({ where: { id: req.params.id } });
    return res.status(200).json(announcement);
  } catch (error) {
    return res.status(500).json(error);
  }
};