/**
 * Created by brady on 2019-06-23.
 */
const express = require('express');
// const createError = require('http-errors');
const User = require('../../models/User');

module.exports = () => {
  const router = express.Router();

  // // 查询用户
  // router.get('/users', async (req, res) => {
  //   if (req.body.id) {
  //     await User.findById(req.body.id, (err, data) => {
  //       if (data) {
  //         res.send({
  //           code: 0,
  //           message: '查询成功',
  //           data: data
  //         });
  //       } else {
  //         res.send({
  //           code: -1,
  //           message: '用户不存在'
  //         });
  //       }
  //     });
  //   } else {
  //     await User.find((err, data) => {
  //       res.send({
  //         code: 0,
  //         message: '查询成功',
  //         data: data
  //       });
  //     });
  //   }
  // });
  //
  // // 修改用户
  // router.put('/editUser', async (req, res) => {
  //   await User.findByIdAndUpdate(req.body.id, req.body, (err, data) => {
  //     res.send({
  //       code: 0,
  //       message: '修改成功'
  //     });
  //   });
  // });
  //
  // // 删除用户
  // router.delete('/removeUser', async (req, res) => {
  //   if (req.body.id) {
  //     await User.findByIdAndRemove(req.body.id,(err, data) => {
  //       res.send({
  //         code: 0,
  //         message: '删除成功'
  //       });
  //     });
  //   } else {
  //     await User.deleteMany({}, (err, data) => {
  //       res.send({
  //         code: 0,
  //         message: '用户表已清空'
  //       });
  //     });
  //   }
  // });

  router.put('/', async (req, res) => {
    await req.Model.findByIdAndUpdate(req.user._id, req.body, (err, data) => {
      res.send({
        code: 0,
        message: '修改成功'
      })
    })
  })

  return router;
}

