const express = require("express");
const router = express.Router();

const { UserModel } = require("../model/UserModel");

router.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    if (!email || !username || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists"
      });
    }

    await UserModel.create({ email, username, password });

    res.status(201).json({
      success: true,
      message: "Signup successful"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Signup failed",
      error: error.message
    });
  }
});

module.exports = router;
