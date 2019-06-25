/**
 * Created by brady on 2019-06-25.
 */
const express = require('express');
// const createError = require('http-errors');
const User = require('../../models/User');

module.exports = () => {
  const router = express.Router();

  // 用户注册
  router.post('/', async (req, res) => {
    await User.create(req.body, (err, data) => {
      if (err) {
        res.send({
          code: err.code,
          message: err.errmsg
        });
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

  return router;
}

