var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
/**
 * 连接 mongoDB 的 user 数据库
 */
mongoose.connect('mongodb://localhost/test');
const db = mongoose.connection;
// 连接失败
db.on('error', console.error.bind(console, 'connection error:'));
// 连接成功
db.once('open', function () {
  console.log("mongoDB connected success");
  // we're connected!
});

/**
 * 创建 user Model
 *  */
const user = new mongoose.Schema({
  id: String,
  name: String
});
let User = mongoose.model('User', user, 'user');


router.get('/demo', function (req, res, next) {
  // 处理好要返回给前端的数据
  // let data = {
  //     name:'xhm',
  //     age:12 }
  // 查询数据库
  User.find((err, doc) => {
    let data = doc;
    // 用 res.json 方法写接口
    res.json({
      code: 0,
      msg: 'ok',
      data: data
    })
  });

});
module.exports = router;
