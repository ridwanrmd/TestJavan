const express = require("express");
const router = express.Router();
const { Product, UserAsset, sequelize } = require("../../../models");

const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const result = await sequelize.transaction(async (t) => {
      await UserAsset.destroy({ where: { productId } }, { transaction: t });

      const resDeleteProduct = await Product.destroy(
        { where: { productId } },
        { transaction: t }
      );

      return resDeleteProduct;
    });

    if (!result) {
      throw { code: 400, message: "gagal hapus produk" };
    }

    res.send({
      status: "success",
      message: "success delete product",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.delete("/:productId", deleteProduct);

module.exports = router;
