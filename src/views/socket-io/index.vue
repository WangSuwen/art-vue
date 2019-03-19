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
            <ul>
              <li
                v-for="(msg, index) in activeUserMsg"
                :key="index"
                :class="msg.sendUserId === loginUserInfo._id ? 'mine' : 'others'"
              >
                <img :src="msg.sendUserId === loginUserInfo._id ? loginUserInfo.avatar : activeUser.avatar"/>
                <div>
                  <span v-if="msg.sendUserId !== loginUserInfo._id">{{msg.sendUserName}}</span>
                  <p>{{msg.content}}</p>
                </div>
              </li>
            </ul>
          </el-col>
          <el-col class="socket-btn">
              <textarea placeholder="说点什么..." id="msgInput"></textarea>
              <div class="send-btn-content">
                <span>按钮栏</span>
                <button
                  class="send-btn"
                  @click="sendMsg"
                >发送</button>
              </div>
          </el-col>
        </div>
      </el-row>
      <el-row class="user-list">
        <el-col
          v-for="(user, key) in userList"
          :key="key"
          class="user-info"
          :class="{active : user._id === activeUser._id}"
        >
          <div
            @click="selectUser(user)"
            style="width: 100%;"
            class="user-info-row"
          >
            <div class="user-info-row__avatar">
              <img
                :src="user.avatar"
                :alt="user.name"
                class="user-avatar"
              >
              <span
                v-if="user.unReadCount"
                class="unread-count"
              >{{user.unReadCount}}</span>
            </div>
            <span class="user-name">{{user.name || '没名字的人'}}</span>
          </div>
        </el-col>
      </el-row>
    </div>
</template>

<script>
import { getUserList } from '@/api/user';
import SOCKETIO from './socket-io.js';

export default {
  data() {
    return {
      /**
       * userList: {
       *  userId: {
       *    _id: XXX,
       *    avatar: xxxx,
       *    ....
       *  }
       * }
       */
      userList: {},
      activeUser: {},
      activeUserMsg: [],
      /**
       * usersMsgs: {
       *  receiveUserId: {
       *    msgs: []
       *  }
       * }
       */
      usersMsgs: {},
      // 主要用于处理 用户未读消息数
      newMsg: {},
      currentPage: 1,
      limit: 10,
    };
  },
  created() {
    // 获取 用户列表
    getUserList().then(users => {
      this.userList = this.formatUserList(users.list);
      this.currentPage = users.currentPage;
    });
  },
  mounted () {
    // 初始化 socket.IO，并将一些需要操作 vue 组件的方法传进去。
    SOCKETIO.init(this.$store.state.user._id, {
      receiveMsgFromUserThroughServer: this.receiveMsgFromUserThroughServer
    });
  },
  methods: {
    formatUserList (userList) {
      const userListObj = {};
      userList.forEach(user => {
        userListObj[user._id] = user;
      });
      return userListObj;
    },
    /**
     * 接收到其他用户发来的信息
     * @param {Object} msg
     */
    receiveMsgFromUserThroughServer (msg) {
      // 如果当前 活跃的窗口正好是信息发送者，则将信息填入 this.activeUserMsg，否则不做任何操作
      if (msg.sendUserId === this.activeUser._id) {
        if (this.activeUserMsg && this.activeUserMsg.length) {
          this.activeUserMsg.push(msg);
        } else {
          this.activeUserMsg = [msg];
        }
      }
      // 不论什么情况都将信息填入 消息列表中
      this.setUsersMsg(msg.sendUserId, msg);
      this.newMsg = msg;
    },
    selectUser(user) {
      this.activeUser = user;
      this.activeUserMsg = this.usersMsgs[user._id] ? this.usersMsgs[user._id]['msgs'] : [];
      const oldThisUserList = JSON.parse(JSON.stringify(this.userList));
      oldThisUserList[user._id]['unReadCount'] = 0;
      this.userList = oldThisUserList;
    },
    sendMsg () {
      const msgInput = document.getElementById('msgInput');
      const msg = msgInput.value;
      const msgObj = {
        sendUserId: this.$store.state.user._id,
        sendUserName: this.$store.state.user.name,
        receiveUserId: this.activeUser._id,
        content: msg
      };
      SOCKETIO.sendMsg(msgObj);
      this.addSendedMsg(msgObj, this);
      msgInput.value = '';
    },
    // 将发送出的消息 添加到消息列表中
    addSendedMsg (msgObj) {
      if (this.activeUserMsg && this.activeUserMsg.length) {
        this.activeUserMsg.push(msgObj);
      } else {
        this.activeUserMsg = [msgObj];
      }
      this.setUsersMsg(msgObj.receiveUserId, msgObj);
    },
    // 设置 消息列表
    setUsersMsg (receiveUserId, msgObj) {
      if (this.usersMsgs[receiveUserId] && this.usersMsgs[receiveUserId]['msgs'].length) {
        this.usersMsgs[receiveUserId]['msgs'].push(msgObj);
      } else {
        this.usersMsgs[receiveUserId] = { msgs: [msgObj] };
      }
    }
  },
  watch: {
    /**
     * 用于设置用户未读消息数
     */
    newMsg(newVal) {
      console.log(123456789);
      const oldThisUserList = JSON.parse(JSON.stringify(this.userList));
      if (oldThisUserList[newVal.sendUserId] && oldThisUserList[newVal.sendUserId]['unReadCount'] !== undefined) {
        oldThisUserList[newVal.sendUserId]['unReadCount'] >= 99 ? '99+' : oldThisUserList[newVal.sendUserId]['unReadCount']++;
      } else {
        oldThisUserList[newVal.sendUserId]['unReadCount'] = 1;
      }
      this.userList = oldThisUserList;
    }
  },
  computed: {
    loginUserInfo () {
      return this.$store.state.user;
    }
  }
};
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
    background-color: #f2f2f2;
    height: 80%;
    overflow-y: scroll;
    ul {
      li {
        list-style: none;
        display: flex;
        margin-bottom: 20px;
        span {
          font-size: 14px;
          margin-bottom: 5px;
          display: inline-block;
        }
        p {
          position: relative;
          background-color: white;
          padding: 5px 4px;
          margin: 0;
          border-radius: 4px;
          min-height: 40px;
          max-width: 500px;
          line-height: 40px;
        }
      }
      img {
        width: 40px;
        height: 40px;
        margin-right: 12px;
      }
      .others {
        p::before {
          content: '';
          position: absolute;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-right: 6px solid white;
          position: absolute;
          left: -6px;
        }
      }
      .mine {
        flex-direction: row-reverse;
        img {
          margin-left: 12px;
        }
        p {
          background-color: #83bff7 !important;
        }
        p::before {
          content: '';
          position: absolute;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 6px solid #83bff7;
          position: absolute;
          right: -6px;
        }
      }
    }
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
    .user-info-row {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 10px 0;
      padding-left: 10px;
      border-bottom: 1px solid #E4E4E4;
      &__avatar {
        position: relative;
        .unread-count {
          position: absolute;
          background-color: red;
          border-radius: 50%;
          display: inline-block;
          width: 20px;
          height: 20px;
          color: white;
          top: -6px;
          right: -10px;
          font-size: 10px;
          text-align: center;
          line-height: 20px;
        }
      }
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
