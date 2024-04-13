var mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://quang:1234@cluster0.hfed7ur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Ket noi thanh cong"))
  .catch((err) => console.error("LỖi kết nối CSDL\n" + err));

module.exports = { mongoose };
