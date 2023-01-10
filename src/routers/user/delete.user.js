const express = require("express");
const router = express.Router();
const { User, UserAsset, sequelize } = require("../../../models");

const deleteUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await sequelize.transaction(async (t) => {
      await UserAsset.destroy({ where: { userId } }, { transaction: t });

      const resDeleteUser = await User.destroy(
        { where: { userId } },
        { transaction: t }
      );

      return resDeleteUser;
    });

    if (!result) {
      throw { code: 400, message: "gagal hapus user" };
    }

    res.send({
      status: "success",
      message: "success delete user",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.delete("/:userId", deleteUser);

module.exports = router;
