const mongoose = require("mongoose");

const contact = new mongoose.Schema({
  email: {
    type: String,
  },
  nom: {
    type: String,
  },
  prenom: {
    type: String,
  },
  msg: {
    type: String,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Contact", contact);
