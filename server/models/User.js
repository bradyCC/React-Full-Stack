/**
 * Created by brady on 2019-06-23.
 */

const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  username: { type: String, unique: true }, // 用户名，设置唯一键
  password: { // 密码
    type: String,
    select: false, // 设置select: false 密码不查出，保存后不会更新
    set (val) {
      return require('bcryptjs').hashSync(val, 10); // 散列模式
    }
  },
  type: { type: String }, // 用户类型
  header: { type: String }, // 头像
  post: { type: String }, // 职位
  info: { type: String }, // 简介
  company: { type: String }, // 公司名称
  salary: { type: String }, // 月薪
});

module.exports = mongoose.model('User', schema, 'users');
