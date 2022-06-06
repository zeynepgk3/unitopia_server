const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const createToken = (id)=>{
  return jwt.sign({id},'secret key'); 
}

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user == null) {
      return res.status(404).send("Kullanıcı bulunamadı");
    }
    if (await bcrypt.compare(req.body.password, user.password)) {

      res.status(200).send(user);
      maxAge=3*24*60*60*1000;
      res.cookie('jwt',token,{httpOnly: true, maxAge:maxAge});

    } else {
      res.status(401).send("Giriş Başarısız");
    }

  } catch (error) {
    // return res.status(500).json(error);
  }

};

exports.logout = async (req, res, next) => { //içi boşş
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (user == null) {
      return res.status(404).send("Kullanıcı bulunamadı");
    }
    if (await bcrypt.compare(req.body.password, user.password)) {

      res.status(200).send(user);

    } else {
      res.status(401).send("Giriş Başarısız");
    }

  } catch (error) {
    return res.status(500).json(error);
  }

};

exports.getAll = async (req, res, next) => {
  try {
    const all = await User.findAll();
    return res.status(200).json(all);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.getOneByEmail = async (req, res, next) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.signUp = async (req, res, next) => {

  const isExist = await User.findOne({ where: { email: req.body.email } });

  if (isExist) {
    return res.status(409).send("Kullanıcı zaten mevcut");
  }

  try {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const userModel = {
      email: req.body.email,
      name: req.body.name,
      password: hashedPassword,
      role: req.body.role,
    };

    try {
      const user = await User.create(userModel);
      const token=createToken(user.id);
      res.cookie('jwt',token,{httpOnly: true, maxAge:3*24*60*60*1000});
      return res.status(201).json({user});
    } catch (error) {
      return res.status(500).json(error);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.updateOne = async (req, res, next) => {
  try {
    const userModel = {
      email: req.body.email,
      name: req.body.name,
      password: req.body.password,
      role: req.body.role,
    };

    try {
      const user = await User.update(userModel, { where: { id: req.params.id } });
      return res.status(200).json(user);
    } catch (error) { }
  } catch (error) {
    return res.status(500).json(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const user = await User.destroy({ where: { id: req.params.id } });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

