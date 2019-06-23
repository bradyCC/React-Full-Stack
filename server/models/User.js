/**
 * Created by brady on 2019-06-23.
 */

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: { type: String, unique: true, required: true }, // 用户名，设置唯一键
  password: { // 密码
    type: String,
    required: true,
    select: false, // 设置select: false 密码不查出，保存后不会更新
    set (val) {
      return require('bcrypt').hashSync(val, 10); // 散列模式
    }
  },
  type: { type: String, required: true } // 用户类型
});

module.exports = mongoose.model('User', schema, 'users');
