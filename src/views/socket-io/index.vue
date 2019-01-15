<template>
    <div class="socket-io">
      <el-row class="chat-block">
        <el-col v-if="!Object.keys(activeUser).length"></el-col>
        <div v-else class="chat-window">
          <el-col class="socket-user-info">
            <div class="chat-user-info">
              <span class="chat-user-name">{{activeUser.name || '没名字的人'}}</span>
            </div>
          </el-col>
          <el-col class="socket-window">
            <div>

            </div>
          </el-col>
          <el-col class="socket-btn">
              <textarea placeholder="说点什么..."></textarea>
              <div class="send-btn-content">
                <span>按钮栏</span>
                <button class="send-btn">发送</button>
              </div>
          </el-col>
        </div>
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
    position: absolute;
    top: 85px;
    left: 180px;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: rgb(243, 243, 243);
  }
  .chat-block {
    width: 1500px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .chat-window {
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .socket-user-info {
    height: 60px;
  }
  .socket-window {
    background-color: white;
    height: 80%;
  }
  .socket-btn {
    height: 150px;
    border-top: 2px solid #f3f3f3;
    position: relative;
    background-color: white;
    textarea {
      border: none;
      resize: none;
      width: 100%;
      height: 100px;
      padding: 8px 10px;
      outline: none;
    }
  }
  .chat-user-info {
    height: 100%;
    position: relative;
    box-shadow: 0 2px 4px #888888;
  }
  .user-list {
    background-color: white;
    width: 400px;
    height: 100%;
    overflow-y: scroll;
    border-left: 2px solid #f3f3f3;
  }
  .user-info {
    max-height: 60px;
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
  .chat-user-name {
    margin-left: 15px;
    transform: translateY(-50%);
    top: 50%;
    position: absolute;
  }
  .user-name {
    margin-left: 15px;
  }
  .send-btn-content {
    position: absolute;
    right: 10px;
    bottom: 5px;
  }
  .send-btn {
    cursor: pointer;
    margin: 0 20px 0 0;
    width: 54px;
    height: 30px;
    text-align: center;
    font-size: 12px;
    color: #fff;
    background-color: #3974cc;
    border-color: #3974cc;
    padding: 1px 7px;    
    border-radius: 4px;
  }
</style>
