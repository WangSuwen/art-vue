import io from 'socket.io-client';
// 浏览器 消息提醒 组件
import Notify from '@wcjiang/notify';
// let a_interval;
let chatSocket;

export default {
  /**
   * 初始化SocketIO
   * @param {String} loginUserId 当前登录的用户的ID
   */
  init(loginUserId) {
    const iNotify = new Notify({
      effect: 'flash',
      audio: {
        // 可以使用数组传多种格式的声音文件
        file: '/static/media/message_remind.mp3'
      }
    });
    // 与聊天服务器进行连接
    chatSocket = io.connect('http://localhost:8008/chat');
    // 接收到其他用户 从 服务器发来的信息
    const socketType = `chat:server-sendMsg-to-user:${loginUserId}`;
    chatSocket.on(socketType, this.receiveMsgFromUserThroughServer);
    chatSocket.on('hello-client', function(data) {
      console.log(data);
    });
    chatSocket.on('server-response', (msg) => {
      iNotify.player();
      iNotify.notify({
        title: '新通知',
        body: msg,
        onclick: function() {
          window.focus();
        },
        onshow: function() {
          console.log('on show');
        }
      });
    });
  },
  sendMsg(msg) {
    chatSocket.emit('chat:user-sendMsg', msg);
  },
  /**
   * 接收到其他用户发来的信息
   * @param {Object} msg
   */
  receiveMsgFromUserThroughServer(msg) {
    debugger;
    console.log('接收到其他用户发来的信息：', msg);
  },
  clearAinterval() {
    // clearInterval(a_interval);
  }
};
