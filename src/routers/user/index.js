const express = require("express");
const router = express.Router();

const getUserRouter = require("./get.user");
const postUserRouter = require("./post.user");
const patchUserRouter = require("./patch.user");
const deleteUserRouter = require("./delete.user");

router.use(getUserRouter);
router.use(postUserRouter);
router.use(patchUserRouter);
router.use(deleteUserRouter);

module.exports = router;
