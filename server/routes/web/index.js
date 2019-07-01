/**
 * Created by brady on 2019-06-23.
 */
const express = require('express');
// const createError = require('http-errors');
const User = require('../../models/User');
const Chat = require('../../models/Chat');

module.exports = () => {
  const router = express.Router();

  // 完善资料保存接口
  router.put('/users', async (req, res) => {
    let result = await User.findByIdAndUpdate(req.user._id, req.body, (err, data) => {});
    res.send({
      code: 0,
      message: '修改成功',
      data: result
    })
  });

  // 获取数据列表
  router.get('/userList/:type', async (req, res) => {
    await User.find({ type: req.params.type, header: {$exists: true} } , (err, data) => {
      res.send({
        code: 0,
        message: '查询成功',
        data: data
      })
    })
  })

  // 获取用户信息
  router.get('/users', async (req, res) => {
    await User.findById(req.user._id, (err, data) => {
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
  });

  // 获取聊天消息列表
  router.get('/messageList', async (req, res) => {
    await User.find((err, data) => {
      const users = data.reduce((users, user) => {
        users[user._id] = { username: user.username, header: user.header}
        return users
      }, {})

      Chat.find({'$or': [{ from: req.user._id }, {to: req.user._id }]}, (err, data) => {
        res.send({
          code: 0,
          message: '查询成功',
          data: { users, chatMsgs: data }
        });
      });
    });
  });

  // 指定消息为已读
  router.put('/readmsg', async (req, res) => {
    console.log(req.body.from)
    console.log(req.user._id)
    const from = req.body.from;
    const to = req.user._id;
    await Chat.updateMany({from, to, read: false}, {read: true}, {multi: true}, (err,data) => {
      res.send({
        code: 0,
        message: '修改成功',
        data: data.nModified // 更新数量
      })
    })
  });

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

  return router;
}

