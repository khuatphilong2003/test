var express = require("express");
var router = express.Router();
var apiSp = require("../controllers/Api/sanpham.api");
//   GET: /api/users
router.get("/listsp", apiSp.listSp); // lấy ds

module.exports = router;
