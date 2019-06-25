/**
 * Created by brady on 2019-06-25.
 */
const express = require('express');
const createError = require('http-errors');
const User = require('../../models/User');

module.exports = () => {
  const router = express.Router();

  // 登录
  router.post('/', async (req, res, next) => {

    const {username, password } = req.body;

    // 1.验证用户名
    // if (!username) return next(createError(422, '请输入用户名'));
    const user = await User.findOne({username}).select('+password');
    if (!user) return next(createError(422, '用户不存在'));

    // 2.验证密码
    // if (!password) return next(createError(422, '请输入密码'));
    const isValid = require('bcrypt').compareSync(password, user.password);
    if (!isValid) return next(createError(422, '密码错误'));

    // 3.返回token
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ id: user._id }, req.app.get('secret'));
    res.send({
      code: 0,
      message: '登录成功',
      username,
      type: user.type,
      token
    });
  });

  return router;
}

