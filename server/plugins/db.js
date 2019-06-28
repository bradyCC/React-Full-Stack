/**
 * Created by brady on 2019-06-23.
 */
module.exports = app => {
  const mongoose = require('mongoose');
  mongoose.connect('mongodb://localhost:27017/node-react', {
    useCreateIndex: true, // 创建唯一键
    useNewUrlParser: true
  });

  mongoose.set('useFindAndModify', false)
  mongoose.connection.on('connected', () => { console.log('Mongodb Database connection successful!') });

  require('require-all')(__dirname + '/../models');
}
