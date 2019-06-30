/**
 * Created by brady on 2019/6/28.
 */
const Chat = require('../models/Chat')

module.exports = (server) => {
  // 获取io对象
  const io = require('socket.io')(server)

  // 监听客户端与服务器的连接
  io.on('connection', socket => {
    console.log('user login')
    // console.log('有一个客户端连接上了服务器')

    // 绑定监听，接收客户端发送的消息
    socket.on('sendMsg', async data => {
      // console.log('服务器接收到客户端发送的消息：', data)

      // 处理数据
      const { from, to, content } = data
      const chat_id = [from, to].sort().join('_')
      const create_time = Date.now()
      // 存储数据
      await Chat.create({from, to, content, chat_id, create_time}, (err, data) => {
        io.emit('receiveMsg', Object.assign({}, data._doc))

        // // io.emit('receiveMsg', data) // 发送给所有连接在服务器上的客户端
        // socket.emit('receiveMsg', data) // 发送给当前socket对应的客户端
        // console.log('服务器向客户端发送的消息：', data)
      })
    })
  })
}
