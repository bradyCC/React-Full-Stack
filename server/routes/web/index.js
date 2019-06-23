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
          data: data
        });
      }
    });
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



