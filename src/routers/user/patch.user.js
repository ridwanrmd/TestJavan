const express = require("express");
const router = express.Router();
const { User } = require("../../../models");

const updateUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { name, gender } = req.body;
    await User.update(
      { name, gender },
      {
        where: { userId },
      }
    );
    res.send({
      status: "success",
      message: "success update user",
    });
  } catch (error) {
    next(error);
    console.log(error);
  }
};

router.patch("/:userId", updateUser);

module.exports = router;
