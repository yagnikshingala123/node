const express = require("express");
const router = express.Router();
require("../database/connection");
const User = require("../models/userSchema");

router.get("/", (req, resp) => {
  resp.send("app is working Hello World ....");
});

router.post("/register", (req, res) => {
  const { name, email, password, cpassword } = req.body;
  if (!name || !email || !password || !cpassword) {
    return res.status(422).json({ error: "Please fill all the data" });
  }
  User.findOne({ email: email })
    .then((userExist) => {
      if (userExist) {
        return res.status(422).json({ error: "Email already exist" });
      }
      const user = new User({ name, email, password, cpassword });

      user
        .save()
        .then(() => {
          res.status(201).json({ message: "success" });
        })
        .catch((error) =>
          res.status(500).json({ error: "Failed to register" })
        );
    })
    .catch((error) => console.log(error));
});

module.exports = router;
