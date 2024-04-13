var express = require("express");
var router = express.Router();
var spCtrl = require("../controllers/sanpham.controllers");
router.get("/", spCtrl.list);

module.exports = router;
