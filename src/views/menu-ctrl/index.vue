<template>
  <div>
    <el-row class="btn-group">
      <el-button
        type="primary"
        @click="addMenu"
      >添加菜单项</el-button>
    </el-row>
    <el-table
      :data="menus"
      style="width: 90%;margin-left: 15px;margin-top: 15px;"
      :stripe="true"
      :border="true"
      empty-text="暂无数据"
    >
      <el-table-column
        label="菜单名称"
        prop="menuName"
      >
      </el-table-column>
      <el-table-column
        label="菜单值"
        prop="menuValue"
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
            <el-form-item label="菜单名称">
              <span>{{ props.row.menuName }}</span>
            </el-form-item>
            <el-form-item label="菜单值">
              <span>{{ props.row.menuValue }}</span>
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
      :title="editType === 'add' ? '添加菜单' : '编辑菜单'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="editingMenu" :inline="true">
        <el-form-item label="菜单名称" label-width="80px">
          <el-input autoComplete="off" v-model="editingMenu.menuName"></el-input>
        </el-form-item>
        <el-form-item label="菜单值" label-width="80px">
          <el-input autoComplete="off" v-model="editingMenu.menuValue"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="menuOption">确 定</el-button>
      </div>
    </el-dialog>
    <!--弹出层 End-->
  </div>
</template>

<script>
import menusApi from '@/api/menus';
const emptyMenu = {
  _id: '',
  menuName: '',
  menuValue: ''
};

export default {
  data() {
    return {
      editType: 'add', // 操作类型 add：添加；update：编辑
      dialogFormVisible: false,
      editingMenu: {
        _id: '',
        menuName: '',
        menuValue: ''
      },
      menus: []
    }
  },
  created() {
    menusApi.getMenus()
      .then(result => {
        this.menus = result;
      })
      .catch(e => {
        console.error(e);
      });
  },
  methods: {
    handleEdit(menuId) {
      this.editType = 'update';
      this.dialogFormVisible = true;
      this.editingMenu = this.menus.find(menu => menu._id === menuId);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    addMenu() {
      this.editType = 'add';
      this.editingMenu = emptyMenu;
      this.dialogFormVisible = true;
    },
    /**
     * 添加或修改菜单
     */
    menuOption() {
      const func = this.editType === 'add' ? menusApi.addMenus : menusApi.updateMenu;
      func(this.editingMenu)
        .then(result => {
          this.dialogFormVisible = false;
          if (this.editType === 'add') {
            this.menus.push(result);
          } else {
            for (let i = 0; i < this.menus.length; i++) {
              if (this.menus[i]._id === this.editingMenu._id) {
                this.menus[i].menuName = this.editingMenu.menuName;
                this.menus[i].menuValue = this.editingMenu.menuValue;
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
