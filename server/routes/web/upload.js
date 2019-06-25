/**
 * Created by brady on 2019-06-25.
 */
const express = require('express');
const multer = require('multer');

const upload = multer({dest: __dirname + '/../../public/uploads'});
// app.use(multer({dest:'./public/upload'}).any());  //接收POST文件s

module.exports = function() {
  let router = express.Router();

  // 上传图片
  router.post('/', upload.single('file'), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/public/uploads/${file.filename}`;
    res.send(file);
  });

  return router;
}

