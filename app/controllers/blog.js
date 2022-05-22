const Blog = require('../models/blog');

exports.getAll = async (req, res, next) => {
  try {
    const all = await Blog.findAll();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const blog = await Blog.findByPk(req.params.id);
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getAllByUser = async (req, res, next) => {
  try {
    const blogsFromOneAuthor = await Blog.findAll({where:{authorId: req.params.id}});
    return res.status(200).json(blogsFromOneAuthor);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.createOne = async (req, res, next) => {
  //TODO: check if authorId is not exist
  try {
    const blogModel = {
      header: req.body.header,
      authorId: req.body.authorId,
      content: req.body.content,
      status: req.body.status,
    };

    try {
      const blog = await Blog.create(blogModel);
      console.log('Blog created');
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
    const blogModel = {
      header: req.body.header,
      authorId: req.body.authorId,
      content: req.body.content,
      status: req.body.status,
      rejectReason: req.body.rejectReason
    };

    try {
      const blog = await Blog.update(blogModel, { where: { id: req.params.id } });
      return res.status(200).json(blog);
    } catch (error) {}
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const user = await Blog.destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};