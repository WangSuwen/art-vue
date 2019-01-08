<template>
  <div>

    <el-row :gutter="20" style="margin:100px 15px 50px;">
      <el-col :span="12" v-for="(msg, index) in msgs" :key="index">
        <p>{{msg}}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getUserList } from '@/api/user'


// 浏览器 消息提醒 组件
import Notify from '@wcjiang/notify';
let a_interval = null;
export default {
  data() {
    return {
      msgs: [],
      users: []
    }
  },
  created() {
    getUserList(50, 1).then(users => {
      this.users = users;
      console.log(users);
    });
  },
  mounted () {
    const iNotify = new Notify({
      effect: 'flash',
      audio:{
        // 可以使用数组传多种格式的声音文件
        file: '/static/media/message_remind.mp3'
      }
    });
    
    socket.on('hello-client', function (data) {
      console.log(data);
      let i = 0;
      a_interval = setInterval(() => {
        socket.emit('hello-server', { my: `${i++}--client\`s message` });
      }, 3000000);
    })
    socket.on('server-response', (msg) => {
      iNotify.player();
      iNotify.notify({
        title: '新通知',
        body: msg,
        onclick: function() {
          window.focus()
        },
        onshow: function() {
          console.log('on show')
        },
      });
      this.msgs.push(msg);
    });
  },
  destroyed () {
    clearInterval(a_interval);
  },
  computed: {}
}
</script>

<style scoped>
.box-card {
  width: 600px;
  margin: 20px auto;
}
.item-btn{
  margin-bottom: 15px;
  margin-left: 0px;
}
.block {
  padding: 25px;
}
</style>
