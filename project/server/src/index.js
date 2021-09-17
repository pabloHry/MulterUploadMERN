const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const Vitrine = require("./schemas/vitrine");
const Contact = require("./schemas/contact");
const multer = require("multer");
const upload = multer({ dest: "public/images" });
const fs = require("fs");

dotenv.config();

mongoose.connect(
  `${process.env.PART1STRING}${process.env.USERNAME}:${process.env.PASSWORD}${process.env.PART2STRING}`,
  (err) => {
    if (err) throw err;
    console.log("Connected To Mongo");
  }
);

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use("/static", express.static("upload"));

app.post("/uploadFile", upload.single("avatar"), async (req, res, next) => {
  const { author, title, body } = req?.body;
  let fileType = req.file.mimetype.split("/")[1];
  let newFileName = req.file.filename + "." + fileType;
  fs.rename(
    `public/images/${req.file.filename}`,
    `public/images/${newFileName}`,
    function () {
      console.log("send");
    }
  );
  const newVitrine = new Vitrine({
    author,
    body,
    title,
    img: newFileName,
  });
  newVitrine.save();
  return res.send(newVitrine);
});

app.post("/contact", async (req, res) => {
  const { prenom, email, nom, msg } = req?.body;

  const newContact = new Contact({
    prenom,
    email,
    nom,
    msg,
  });
  newContact.save();
  return res.send(newContact);
});

app.get("/image", async (req, res) => {
  const result = await Vitrine.find({});
  return res.json(result);
});

app.get("/contact", async (req, res) => {
  const result = await Contact.find({});
  return res.json(result);
});

app.listen(process.env.PORT, () => {
  console.log(`Serveur lancer sur le port ${process.env.PORT}`);
});
