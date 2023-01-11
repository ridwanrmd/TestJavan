const express = require("express");
const router = express.Router();

const postUserAssetRouter = require("./post.userAsset");
const deleteUserAssetRouter = require("./delete.userAsset");

router.use(postUserAssetRouter);
router.use(deleteUserAssetRouter);

module.exports = router;
