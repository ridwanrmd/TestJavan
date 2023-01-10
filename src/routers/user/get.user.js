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

const getUserById = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const resGetUser = await User.findOne({
      where: { userId },
    });
    res.send({ data: resGetUser });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.get("/", getAllUser);
router.get("/:userId", getUserById);

module.exports = router;
