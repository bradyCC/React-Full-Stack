/**
 * Created by brady on 2019-06-27.
 */

module.exports = (server) => {
  // 获取io对象
  const io = require('socket.io')(server)

  // 监听连接
  io.on('connection', (socket) => {
    console.log('socketio connected')

    // 绑定 sendMsg 监听，接收客户端发送的信息
    socket.on('sendMsg', (data) => {
      console.log('服务器接收到浏览器的消息', data)

      // 向客户端发送信息
      io.emit('receiveMsg', data.name + '_' + data.date) // 发送给所有连接在服务器上的客户端
      // socket.emit('receiveMsg', data.name + '_' + data.date) // 发送给当前socket对应的客户端
      console.log('服务器向浏览器发送消息', data)
    })
  })
}
