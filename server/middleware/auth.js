/**
 * Created by brady on 2019-06-25.
 */
const createError = require('http-errors');
// 处理token
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = options => {

  return async (req, res, next) => {
    // 获取token
    const token = String(req.headers.authorization || '').split(' ').pop();
    if (!token) return next(createError(401, '请先登录'))

    // 解析token返回id
    const { id } = jwt.verify(token, req.app.get('secret'));
    if (!id) return next(createError(401, '请先登录'))

    // 查询用户表
    req.user = await User.findById(id);
    if (!req.user) return next(createError(401, '请先登录'))

    next()
  }
}
