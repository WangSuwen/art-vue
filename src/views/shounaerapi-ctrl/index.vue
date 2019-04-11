<template>
  <div>
    <el-row class="btn-group">
      <el-button
        type="primary"
        @click="addApiDialog"
      >添加API</el-button>
    </el-row>
    <el-table
      :data="apis"
      style="width: 90%;margin-left: 15px;margin-top: 15px;"
      :stripe="true"
      :border="true"
      empty-text="暂无数据"
    >
      <el-table-column
        label="接口名称"
        prop="apiName"
      >
      </el-table-column>
      <el-table-column
        label="API-path"
        prop="apiPath"
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
      <!-- 详情框 START -->
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
            <el-form-item label="接口名称">
              <span>{{ props.row.apiName }}</span>
            </el-form-item>
            <el-form-item label="API-path">
              <span>{{ props.row.apiPath }}</span>
            </el-form-item>
            <el-form-item label="创建时间">
              <span>{{ props.row.createdAt }}</span>
            </el-form-item>
            <el-form-item label="最近一次修改">
              <span>{{ props.row.updatedAt || '暂无修改' }}</span>
            </el-form-item>
            <el-form-item label="返回值">
              <el-input type="textarea" :rows="3" resize="both" autoComplete="off" v-model="props.row.apiResponse"></el-input>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <!-- 详情框 END -->
    </el-table>
    <!--弹出层 Start-->
    <el-dialog
      :title="editType === 'add' ? '添加接口' : '编辑接口'"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="editingApi" :inline="true">
        <el-form-item label="接口名称" label-width="80px">
          <el-input autoComplete="off" v-model="editingApi.apiName"></el-input>
        </el-form-item>
        <el-form-item label="API-path" label-width="80px">
          <el-input autoComplete="off" v-model="editingApi.apiPath"></el-input>
        </el-form-item>
        <el-form-item label="返回值" label-width="80px">
          <el-input type="textarea" :rows="3" resize="both" autoComplete="off" v-model="editingApi.apiResponse"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="apiOption">确 定</el-button>
      </div>
    </el-dialog>
    <!--弹出层 End-->
  </div>
</template>

<script>
import { getApiList, addApi, updateApi } from '@/api/shounaerApi';
const emptyApi = {
  _id: '',
  apiName: '',
  apiPath: ''
};

export default {
  data() {
    return {
      editType: 'add', // 操作类型 add：添加；update：编辑
      dialogFormVisible: false,
      editingApi: {
        _id: '',
        apiName: '',
        apiPath: '',
        apiResponse: ''
      },
      apis: []
    }
  },
  created() {
    getApiList()
      .then(result => {
        this.apis = result.list;
      })
      .catch(e => {
        console.error(e);
      });
  },
  methods: {
    /**
     * 弹出 接口编辑弹框
     */
    handleEdit(apiId) {
      this.editType = 'update';
      this.dialogFormVisible = true;
      this.editingApi = this.apis.find(api => api._id === apiId);
    },
    /**
     * 删除 接口
     */
    handleDelete(apiId) {
      delMenus(apiId)
        .then(result => {
          debugger
          console.log(result);
        })
        .catch(e => {
          console.error(e);
        });
    },
    addApiDialog() {
      this.editType = 'add';
      this.editingApi = JSON.parse(JSON.stringify(emptyApi));
      this.dialogFormVisible = true;
    },
    /**
     * 添加或修改接口
     */
    apiOption() {
      const func = this.editType === 'add' ? addApi : updateApi;
      func(this.editingApi)
        .then(result => {
          this.dialogFormVisible = false;
          if (this.editType === 'add') {
            this.apis.push(result);
          } else {
            for (let i = 0; i < this.apis.length; i++) {
              if (this.apis[i]._id === this.editingApi._id) {
                this.apis[i].apiName = this.editingApi.apiName;
                this.apis[i].apiPath = this.editingApi.apiPath;
                this.apis[i].apiResponse = this.editingApi.apiResponse;
                this.apis[i].updatedAt = result.updatedAt;
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
