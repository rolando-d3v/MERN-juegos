const CategoryModels = require("../models/Category");
const { errorHandler } = require("../helpers/dberrorHandler");

// crea categoria
exports.create = (req, res) => {
  const category = new CategoryModels(req.body);
  category.save((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({ data });
  });
};

exports.list = (req, res) => {
  CategoryModels.find().exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json(data);
  });
};

//eliminar categoria
exports.remove = (req, res) => {
  let category = req.category;
  category.remove((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err),
      });
    }
    res.json({
      message: "Categoria Success deleted",
    });
  });
};

exports.categoryById = (req, res, next, id) => {
  CategoryModels.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({
        error: "categoria was not found or doest",
      });
    }
    req.category = category;
    next();
  });
};
