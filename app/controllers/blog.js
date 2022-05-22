const Blog = require('../models/blog');

exports.getAll = async (req, res, next) => {
  try {
    const all = await Blog.findAll();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// exports.getOne = async (req, res, next) => {
//   try {
//     const user = await Blog.findByPk(req.params.id);
//     return res.status(200).json(user);
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// exports.createOne = async (req, res, next) => {
//   try {
//     const userModel = {
//       email: req.body.email,
//       name: req.body.name,
//       password: req.body.password,
//       role: req.body.role,
//     };

//     try {
//       const user = await Blog.create(userModel);
//       console.log('Blog created');
//       return res.status(201).json(user);
//     } catch (error) {
//       return res.status(500).json(error);
//     }
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

// exports.updateOne = async (req, res, next) => {
//   try {
//     const userModel = {
//       email: req.body.email,
//       name: req.body.name,
//       password: req.body.password,
//       role: req.body.role,
//     };

//     try {
//       const user = await Blog.update(userModel, { where: { id: req.params.id } });
//       return res.status(200).json(user);
//     } catch (error) {}
//   } catch (error) {
//     return res.status(500).json(error);
//   }
// };

exports.deleteOne = async (req, res, next) => {
  try {
    const user = await Blog.destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};