const express = require("express");
const router = express.Router();
const { User } = require("../../../models");

const createNewUser = async (req, res, next) => {
  const { name, gender } = req.body;
  const resCreateUser = await User.create({
    name,
    gender,
  });
  res.send({
    status: "succes",
    message: "succes create new user",
    data: resCreateUser,
  });
};

router.post("/", createNewUser);

module.exports = router;
