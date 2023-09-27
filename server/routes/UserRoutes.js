const express = require("express");
const router = express.Router();
const User = require("../model/UserModel");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    // const password = req.body.password;
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    // req.body.password = hashedPassword;

    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).send("User created successfully");
  } catch (error) {
    return res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (user) {
      res.send(user);
    } else {
      return res.status(400).json({ message: "Invalid Credential" });
    }
  } catch (error) {
    return res.status(400).json(error);
  }

  // try {
  //   const user = await User.findOne({ username: req.body.username });
  //   if (!user) {
  //     return res.status(200).json("No such a user");
  //   }
  //   const IsValid = await bcrypt.compare(req.body.password, user.password);
  //   if (!IsValid) {
  //     return res.status(200).json("Wrong Password");
  //   } else {
  //     return res.status(200).json("success");
  //   }
  // } catch (error) {
  //   console.log(error);
  //   res.status(500).json("Cannot login");
  // }
});

// update user profile

router.post("/update", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);
    const user = await User.findOne({ _id: req.body._id });
    res.send(user);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// get all users
router.get("/getallusers", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

module.exports = router;
