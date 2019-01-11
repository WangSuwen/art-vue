<template>
  <div class="socket-io">
    <el-row class="chat-block">
      <el-col v-if="!Object.keys(activeUser).length"></el-col>
      <el-col v-else>
        <div class="chat-user-info">
          <span class="user-name">{{activeUser.name || '没名字的人'}}</span>
        </div>
      </el-col>
      <el-col>
        
      </el-col>
      <el-col>
        
      </el-col>
    </el-row>
    <el-row class="user-list">
      <el-col
        v-for="user in userList"
        :key="user._id"
        class="user-info"
        :class="{active : user._id === activeUser._id}"
      >
        <div @click="selectUser(user)" style="width: 100%;">
          <img
            :src="user.avatar"
            :alt="user.name"
            class="user-avatar"
          >
          <span class="user-name">{{user.name || '没名字的人'}}</span>
        </div>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="20" style="margin:100px 15px 50px;">
      <el-col :span="12" v-for="(msg, index) in msgs" :key="index">
        <p>{{msg}}</p>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
import { getUserList } from '@/api/user'
import SOCKETIO from './socket-io.js'

export default {
  data() {
    return {
      userList: [],
      activeUser: {},
      currentPage: 1,
      limit: 10,
      msgs: []
    }
  },
  created() {
    getUserList().then(users => {
      this.userList = users.list;
      this.currentPage = users.currentPage;
    });
  },
  mounted () {
    SOCKETIO.init();
  },
  methods: {
    selectUser(user) {
      this.activeUser = user;
    }
  },
  destroyed () {
    SOCKETIO.clearAinterval();
  },
  computed: {}
}
</script>

<style scoped lang="scss">
  .active {
    background-color: rgba(57,116,204,.15);
  }
  .socket-io {
    display: flex;
    background-color: rgb(243, 243, 243);
  }
  .chat-block {
    width: 1500px;
    height: 603px;
  }
  .chat-user-info {
    box-shadow: 0 2px 4px #888888;
    height: 50px;
    line-height: 50px;
  }
  .user-list {
    background-color: white;
  }
  .user-info {
    div {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px 0;
      padding-left: 10px;
      border-bottom: 1px solid #E4E4E4;
    }
  }
  .user-avatar {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  .user-name {
    margin-left: 15px;
  }
</style>
