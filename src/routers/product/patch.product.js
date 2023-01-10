const express = require("express");
const router = express.Router();
const { Product } = require("../../../models");

const updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const { productName, desc, price } = req.body;
    await Product.update(
      { productName, desc, price },
      { where: { productId } }
    );
    res.send({
      status: "success",
      message: "success update product",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.patch("/:productId", updateProduct);

module.exports = router;
