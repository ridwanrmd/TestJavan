const express = require("express");
const router = express.Router();
const { UserAsset } = require("../../../models");

const deleteUserAsset = async (req, res, next) => {
  try {
    const { userId, productId } = req.body;
    await UserAsset.destroy({
      where: { userId, productId },
    });
    res.send({
      status: "success",
      message: "success delete user asset",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.delete("/", deleteUserAsset);

module.exports = router;
