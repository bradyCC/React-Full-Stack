/**
 * Created by brady on 2019-06-27.
 */
// 引入客户端io
import io from 'socket.io-client'

// 连接服务器，获取socket对象
const socket = io('http://localhost:3000')

// 绑定 receiveMsg 监听，接收服务器发送的信息
socket.on('receiveMsg', (data) => {
  console.log('浏览器接收到消息：', data)
})

// 向服务器发送消息
socket.emit('sendMsg', {name: 'Brady', date: Date.now()})
console.log('浏览器向服务器发送的消息：', {name: 'Brady', date: Date.now()} )
