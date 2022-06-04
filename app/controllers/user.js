const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

User. loggedUser;

exports.login = async (req, res, next) => {
  console.log("req.body ", req.body);
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log("user", user);
    if (user == null) {
      return res.status(404).send("Kullanıcı bulunamadı");
    }
    if (await bcrypt.compare(req.body.password, user.password)) {
      // const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
      // console.log("accesstoken accesstoken accesstoken accesstoken accesstoken ");
      // console.log(accessToken);
      // console.log("res json accesstoken res json accesstoken res json accesstoken accesstoken accesstoken ");
      // res.json({ accessToken: accessToken });
      // console.log(res.json({ accessToken: accessToken }));
      // console.log("");

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

exports.createOne = async (req, res, next) => {
  const isExist = await User.findOne({ where: { email: req.body.email } });

  if (isExist) {
    console.log(!isExist);
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
      console.log('User ', user.name ,' created');
      return res.status(201).json(user);
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

