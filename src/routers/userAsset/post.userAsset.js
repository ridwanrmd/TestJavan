const express = require("express");
const router = express.Router();
const { UserAsset } = require("../../../models");

const createUserAsset = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    const resCreateUserAsset = await UserAsset.create({
      userId,
      productId,
    });
    res.send({
      status: "success",
      message: "success create new user asset",
      data: resCreateUserAsset,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.post("/", createUserAsset);

module.exports = router;
