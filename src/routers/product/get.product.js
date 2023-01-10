const express = require("express");
const router = express.Router();
const { Product } = require("../../../models");

const getAllProduct = async (req, res, next) => {
  try {
    const resGetProduct = await Product.findAll();
    res.send({
      status: "success",
      message: "success get product list",
      data: resGetProduct,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.get("/", getAllProduct);

module.exports = router;
