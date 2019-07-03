/**
 * Created by brady on 2019-06-23.
 */
module.exports = app => {
  const mongoose = require('mongoose');
  // 本地
  mongoose.connect('mongodb://localhost:27017/node-react', {
    useCreateIndex: true, // 创建唯一键
    useNewUrlParser: true
  });

  // 虚拟机
  // mongoose.connect('mongodb://brady:liuping521@192.168.1.108:27017/node-react', {
  //   useCreateIndex: true, // 创建唯一键
  //   useNewUrlParser: true
  // });

  mongoose.set('useFindAndModify', false)
  mongoose.connection.on('connected', () => { console.log('Mongodb Database connection successful!') });

  require('require-all')(__dirname + '/../models');
}
