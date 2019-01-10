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
import SOCKETIO from './socket-io.js'

export default {
  data() {
    return {
      msgs: []
    }
  },
  created() {
    debugger;
  },
  mounted () {
    debugger;
    SOCKETIO.init();
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
