/**
 * Created by brady on 2019/6/28.
 */
module.exports = (server) => {
  // 获取io对象
  const io = require('socket.io')(server)

  // 监听客户端与服务器的连接
  io.on('connection', socket => {
    console.log('有一个客户端连接上了服务器')

    // 绑定监听，接收客户端发送的消息
    socket.on('sendMsg', data => {
      console.log('服务器接收到客户端发送的消息：', data)

      // 处理数据
      data.name = data.name.toUpperCase()
      data.date = Date.now()

      // 服务器向客户端发送消息
      // io.emit('receiveMsg', data) // 发送给所有连接在服务器上的客户端
      socket.emit('receiveMsg', data) // 发送给当前socket对应的客户端
      console.log('服务器向客户端发送的消息：', data)
    })
  })
}

