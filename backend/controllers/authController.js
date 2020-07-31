const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
const User = require("../models/User");
// const { errorHandler } = require('../helpers/dberrorHandler');

// signup
exports.signup = (req, res) => {
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((error, user) => {
    console.log("reachzer user enpoint");
    if (error) {
      return res.status(400).json({
        messager: "please check fileds there we error",
      });
    }
    user.salt = undefined;
    user.hashed_password = undefined;
    res.json({
      user,
    });
  });
};

// signin
exports.signin = (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (error || !user) {
      return res.status(400).json({
        error: "user with email no existe",
      });
    }
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: "email and password dont wath",
      });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    res.cookie("t", token, { expire: new Date() + 9999 });
    const { _id, name, email, role } = user;
    return res.json({ token, user: { _id, email, name, role } });
  });
};

// borrar token y salir de sesion
exports.signout = (req, res) => {
  res.clearCookie("t");
  res.json({ message: "signout success" });
};

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "User no Found",
      });
    }
    req.profile = user;
    next();
  });
};

// exports.isAdmin = (req, res, next) => {
//     let user = req.profile && req.auth && req.profile._id == req.auth._id
//     if(!user) {
//         return res.status(403).json({
//             error: "Access Denied"
//         })
//     }
//     next()
// }
