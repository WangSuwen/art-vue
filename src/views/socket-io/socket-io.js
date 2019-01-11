import io from 'socket.io-client';
// 浏览器 消息提醒 组件
import Notify from '@wcjiang/notify';
let a_interval;

export default {
  init() {
    const iNotify = new Notify({
      effect: 'flash',
      audio: {
        // 可以使用数组传多种格式的声音文件
        file: '/static/media/message_remind.mp3'
      }
    });
    const socket = io.connect('http://localhost:8008');
    socket.on('hello-client', function(data) {
      console.log(data);
      let i = 0;
      a_interval = setInterval(() => {
        socket.emit('hello-server', { my: `${i++}--client\`s message` });
      }, 300000000);
    });
    socket.on('server-response', (msg) => {
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
      // this.msgs.push(msg)
    });
  },
  clearAinterval() {
    clearInterval(a_interval);
  }
};
