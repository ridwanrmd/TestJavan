const express = require("express");
const router = express.Router();
const { Product } = require("../../../models");

const getAllProduct = async (req, res, next) => {
  try {
    const resGetProduct = await Product.findAll({
      attributes: ["productId", "productName", "desc", "price"],
    });
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

const getProductById = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const resGetProduct = await Product.findOne({
      where: { productId },
      attributes: ["productId", "productName", "desc", "price"],
    });
    res.send({
      status: "success",
      message: "succes get product by id",
      data: resGetProduct,
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.get("/", getAllProduct);
router.get("/:productId", getProductById);

module.exports = router;
