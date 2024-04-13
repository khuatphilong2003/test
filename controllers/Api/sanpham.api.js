const md = require("../../models/sanpham.model");

exports.listSp = async (req, res, next) => {
  let dataReturn = {
    status: 1,
    msg: "ok",
  };
  // code xử lý lấy danh sách ở đây
  let list = [];
  try {
    list = await md.spModel.find();
    dataReturn.data = list;
  } catch (error) {
    dataReturn.msg = error.message;
  }

  // trả về client
  res.json(dataReturn);
};
