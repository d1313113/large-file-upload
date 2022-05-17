// 使用express构建服务器api
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// 引入上传文件逻辑代码
const upload = require("./src/utils/upload");
// 处理所有响应，设置跨域
const app = express();

app.all("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With ");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use(morgan("combined"));

app.use(bodyParser.json({ type: "application/*+json" }));
// app.use(bodyParser.json());
// 视频上传（查询当前切片数）
app.post("/getSize", upload.getSize);
// 视频上传接口
app.post("/video", upload.video);

// 开启本地端口侦听
app.listen(8080);

console.log("init success");