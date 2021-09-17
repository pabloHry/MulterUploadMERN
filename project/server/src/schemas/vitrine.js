const mongoose = require("mongoose");

const vitrine = new mongoose.Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  body: {
    type: String,
  },
  date: { type: Date, default: Date.now },
  img: {
    type: String,
    default: "placeholder.jpeg",
  },
});

module.exports = mongoose.model("Vitrine", vitrine);
