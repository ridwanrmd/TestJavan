const express = require("express");
const router = express.Router();
const { User, Product } = require("../../../models");

const getAllUser = async (req, res, next) => {
  try {
    const resGetUser = await User.findAll({
      attributes: ["userId", "name", "gender"],
    });
    res.send({
      status: "success",
      message: "success get all users",
      data: resGetUser,
    });
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
      attributes: ["userId", "name", "gender"],
      include: [
        {
          model: Product,
          attributes: ["productName"],
        },
      ],
    });
    res.send({
      status: "success",
      message: "success get user by id",
      data: resGetUser,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.get("/", getAllUser);
router.get("/:userId", getUserById);

module.exports = router;
