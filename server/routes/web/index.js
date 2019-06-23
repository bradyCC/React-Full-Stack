/**
 * Created by brady on 2019-06-23.
 */
const express = require('express');
const createError = require('http-errors');
const User = require('../../models/User');

module.exports = () => {
  const router = express.Router();

  /* GET users listing. */
  router.get('/', async (req, res) => {
    res.send({
      code: 0,
      message: 'index'
    });
  });

  // 用户注册
  router.post('/register', async (req, res) => {
    await User.create(req.body, (err, data) => {
      if (err) {
        res.send({
          code: err.code,
          message: err.errmsg
        })
      } else {
        res.send({
          code: 0,
          message: '注册成功',
          data: {
            _id: data._id,
            username: data.username,
            type: data.type
          }
        });
      }
    });
  });

  // 登录
  router.post('/login', async (req, res, next) => {

    const {username, password } = req.body;

    // 1.验证用户名
    if (!username) return next(createError(422, '请输入用户名'));
    const user = await User.findOne({username}).select('+password');
    if (!user) return next(createError(422, '用户不存在'));

    // 2.验证密码
    if (!password) return next(createError(422, '请输入密码'));
    const isValid = require('bcrypt').compareSync(password, user.password);
    if (!isValid) return next(createError(422, '密码错误'));

    // 3.返回token
    const jwt = require('jsonwebtoken');
    const token = jwt.sign({ id: user._id }, req.app.get('secret'));
    res.send({
      code: 0,
      message: '登录成功',
      username,
      token
    })
  });

  // 查询用户
  router.put('/users', async (req, res) => {
    if (req.body.id) {
      await User.findById(req.body.id, (err, data) => {
        if (data) {
          res.send({
            code: 0,
            message: '查询成功',
            data: data
          });
        } else {
          res.send({
            code: -1,
            message: '用户不存在'
          });
        }
      });
    } else {
      await User.find((err, data) => {
        res.send({
          code: 0,
          message: '查询成功',
          data: data
        })
      });
    }
  })

  // 修改用户
  router.post('/editUser', async (req, res) => {
    await User.findByIdAndUpdate(req.body.id, req.body, (err, data) => {
      res.send({
        code: 0,
        message: '修改成功'
      });
    });
  });

  // 删除用户
  router.delete('/removeUser', async (req, res) => {
    if (req.body.id) {
      await User.findByIdAndRemove(req.body.id,(err, data) => {
        res.send({
          code: 0,
          message: '删除成功'
        })
      });
    } else {
      await User.deleteMany({}, (err, data) => {
        res.send({
          code: 0,
          message: '用户表已清空'
        })
      });
    }
  });

  return router;
}



