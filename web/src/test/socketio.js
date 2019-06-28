/**
 * Created by brady on 2019/6/28.
 */
import io from 'socket.io-client'

// 连接服务器，获取socket对象
const socket = io('http://localhost:3000')

// 客户端向服务器发送的消息
socket.emit('sendMsg', { name: 'abc', date: Date.now() })
console.log('客户端向服务器发送的消息：', { name: 'abc', date: Date.now() })

// 客户端接收服务器发送的消息
socket.on('receiveMsg', data => {
  console.log('客户端接收服务器发送的消息：', data)
})
