const myModel = require("../models/sanpham.model");

exports.list = async (req, res, next) => {
  // hiển thị danh sách sản phẩm
  var list = await myModel.spModel.find();
  console.log(list);

  // res.render("sanpham/list", { listSp: list }); // truyền DS ra view
  console.log("Longmg");
  res.render("sanpham/list");
};
