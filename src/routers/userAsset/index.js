const express = require("express");
const router = express.Router();

const postUserAssetRouter = require("./post.userAsset");

router.use(postUserAssetRouter);

module.exports = router;
