const express = require("express");
const router = express.Router();
const { Product } = require("../../../models");

const createNewProduct = async (req, res, next) => {
  try {
    const { productName, desc, price } = req.body;
    const resCreateProduct = await Product.create({
      productName,
      desc,
      price,
    });

    res.send({
      status: "success",
      message: "success create new product",
      data: resCreateProduct,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.post("/", createNewProduct);

module.exports = router;
