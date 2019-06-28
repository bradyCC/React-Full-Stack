/**
 * Created by brady on 2019/6/28.
 */
import io from 'socket.io-client'
import { Toast } from 'antd-mobile'

const initIO = (sendData) => {
  // 连接服务器，获取socket对象
  if (!io.socket) io.socket = io('http://localhost:3000')

  // 客户端向服务器发送的消息
  io.socket.emit('sendMsg', sendData)
  console.log('客户端向服务器发送的消息：', sendData)

  // 向所有连接上的客户端发送消息
  io.socket.once('receiveMsg', data => {
    console.log('客户端接收服务器发送的消息：', data)
    Toast.success(data.message)
  })
}

export default initIO



