const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const categorySchema = new Schema(
  {
    name: {
      type: String,
      require: true,
      maxlength: 32,
      unique: true,
      lowercase:true
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Category", categorySchema);
