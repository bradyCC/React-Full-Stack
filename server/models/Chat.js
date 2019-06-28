/**
 * Created by brady on 2019/6/28.
 */
const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  from: { type: String, required: true }, // 发送用户id
  to: { type: String, required: true }, // 接收用户id
  chat_id: { type: String, required: true }, // from和to组成的字符串
  content: { type: String, required: true }, // 内容
  read: { type: Boolean, default: false }, // 标识是否已读
  create_item: { type: Number }, // 创建时间
});

module.exports = mongoose.model('Chat', schema, 'chats');
