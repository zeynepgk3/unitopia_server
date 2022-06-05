const Announcement = require('../models/announcement');
const User = require('../models/user');


exports.getAll = async (req, res, next) => {
  try {
    const all = await Announcement.findAll();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const blog = await Announcement.findByPk(req.params.id);
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getAllByUser = async (req, res, next) => {
  try {
    const blogsFromOneAuthor = await Announcement.findAll({ where: { authorId: req.params.id } });
    return res.status(200).json(blogsFromOneAuthor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  //TODO: check if authorId is not exist
  try {
    const announcementModel = {
      header: req.body.header,
      content: req.body.content,
    };

    try {
      const blog = await Announcement.create(announcementModel);
      console.log('Announcement created');
      return res.status(201).json(blog);
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const announcementModel = {
      header: req.body.header,
      content: req.body.content,
    };

    try {
      const announcement = await Announcement.update(announcementModel, { where: { id: req.params.id } });
      return res.status(200).json(announcement);
    } catch (error) { }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const announcement = await Announcement.destroy({ where: { id: req.params.id } });
    return res.status(200).json(announcement);
  } catch (error) {
    return res.status(500).json(error);
  }
};