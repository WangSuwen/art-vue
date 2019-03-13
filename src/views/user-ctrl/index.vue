<template>
  <div>
    <el-row class="btn-group">
      <el-button
        type="primary"
        @click="addMenu"
      >添加用户</el-button>
    </el-row>
    <el-table
      :data="users"
      style="width: 90%;margin-left: 15px;margin-top: 15px;"
      :stripe="true"
      :border="true"
      empty-text="暂无数据"
    >
      <el-table-column
        label="姓名"
        prop="name"
      >
      </el-table-column>
      <el-table-column
        label="用户名"
        prop="username"
      >
      </el-table-column>
      <el-table-column
        label="密码"
        prop="password"
      >
      </el-table-column>
      <el-table-column
        label="操作"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.row._id)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.row._id)">删除</el-button>
        </template>
      </el-table-column>
      <el-table-column
        type="expand"
        width="80"
        label="查看详情"
      >
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="ID">
              <span>{{ props.row._id }}</span>
            </el-form-item>
            <el-form-item label="姓名">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="用户名">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="密码">
              <span>{{ props.row.password }}</span>
            </el-form-item>
            <el-form-item label="创建时间">
              <span>{{ props.row.createdAt }}</span>
            </el-form-item>
            <el-form-item label="最近一次修改">
              <span>{{ props.row.updatedAt }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
    </el-table>
    <!--弹出层 Start-->
    <el-dialog
      :title="editType === 'add' ? '添加用户' : '编辑用户'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="editingUser" :inline="true">
        <el-form-item label="姓名" label-width="80px">
          <el-input autoComplete="off" v-model="editingUser.name"></el-input>
        </el-form-item>
        <el-form-item label="用户名" label-width="80px">
          <el-input autoComplete="off" v-model="editingUser.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" label-width="80px">
          <el-input autoComplete="off" v-model="editingUser.password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="userOption">确 定</el-button>
      </div>
    </el-dialog>
    <!--弹出层 End-->
  </div>
</template>

<script>
import { getUserList } from '@/api/user';
const emptyUser = {
  _id: '',
  name: '',
  username: '',
  password: ''
};

export default {
  data() {
    return {
      editType: 'add', // 操作类型 add：添加；update：编辑
      dialogFormVisible: false,
      editingUser: {
        _id: '',
        name: '',
        username: '',
        password: ''
      },
      users: []
    }
  },
  created() {
    getUserList()
      .then(result => {
        this.users = result.list;
      })
      .catch(e => {
        console.error(e);
      });
  },
  methods: {
    /**
     * 弹出 用户编辑弹框
     */
    handleEdit(userId) {
      this.editType = 'update';
      this.dialogFormVisible = true;
      this.editingUser = this.users.find(user => user._id === userId);
    },
    /**
     * 删除 用户
     */
    handleDelete(userId) {
      delMenus(userId)
        .then(result => {
          debugger
          console.log(result);
        })
        .catch(e => {
          console.error(e);
        });
    },
    addMenu() {
      this.editType = 'add';
      this.editingUser = JSON.parse(JSON.stringify(emptyUser));
      this.dialogFormVisible = true;
    },
    /**
     * 添加或修改用户
     */
    userOption() {
      const func = this.editType === 'add' ? addMenus : updateMenu;
      func(this.editingUser)
        .then(result => {
          this.dialogFormVisible = false;
          if (this.editType === 'add') {
            this.users.push(result);
          } else {
            for (let i = 0; i < this.users.length; i++) {
              if (this.users[i]._id === this.editingUser._id) {
                this.users[i].name = this.editingUser.name;
                this.users[i].username = this.editingUser.username;
                this.users[i].password = this.editingUser.password;
                break;
              }
            }
          }
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>

<style scoped lang="scss">
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  .btn-group {
    margin: 10px 15px;
  }
  .el-input {
    width: 150px;
  }
</style>
