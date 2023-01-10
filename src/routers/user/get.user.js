const express = require("express");
const router = express.Router();
const { User } = require("../../../models");

const getAllUser = async (req, res, next) => {
  try {
    const resGetUser = await User.findAll();
    res.send({ data: resGetUser });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.get("/", getAllUser);

module.exports = router;
