const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const { ObjectId } = mongoose.Schema;

const videogameSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      require: true,
      maxlength: 2000,
    },
    price: {
      type: Number,
      trime: true,
      require: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category",
      require: true,
    },
    quantity: {
      type: Number,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Videogame", videogameSchema);
