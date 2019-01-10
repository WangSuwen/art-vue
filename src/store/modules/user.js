import loginApi from '@/api/login';
import { getToken, removeToken, clearCookie } from '@/utils/auth';

const user = {
  state: {
    userId: '',
    token: getToken(),
    status: '',
    code: '',
    name: '',
    avatar: '',
    introduction: '',
    role: '',
    menus: [],
    setting: {
      articlePlatform: []
    }
  },

  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    // 设置头像
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    // 设置菜单
    SET_MENUS: (state, menus) => {
      state.menus = menus;
    },
    // 设置权限
    SET_ROLE: (state, role) => {
      state.role = role;
    }
  },

  actions: {
    // 用户名登录
    // LoginByUsername({ commit }, userInfo) {
    //   const username = userInfo.username.trim();
    //   return new Promise((resolve, reject) => {
    //     loginByUsername(username, userInfo.password).then(response => {
    //       debugger;
    //       this.$root.setMenus(response.menus);
    //       this.$root.setRole(response.role);
    //       setToken(response.token);
    //       resolve();
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },

    // 获取用户信息
    // GetUserInfo({ commit, state }, data) {
    //   return new Promise((resolve, reject) => {
    //     getUserInfo(data.access_token).then(response => {
    //       if (!response) { // 由于mockjs 不支持自定义状态码只能这样hack
    //         reject('error');
    //       }
    //       commit('SET_ROLES', response.roles);
    //       commit('SET_NAME', response.name);
    //       commit('SET_AVATAR', response.avatar);
    //       commit('SET_INTRODUCTION', response.introduction);
    //       resolve(response);
    //     }).catch(error => {
    //       reject(error);
    //     });
    //   });
    // },

    // 第三方验证登录
    // LoginByThirdparty({ commit, state }, code) {
    //   return new Promise((resolve, reject) => {
    //     commit('SET_CODE', code)
    //     loginByThirdparty(state.status, state.email, state.code).then(response => {
    //       commit('SET_TOKEN', response.data.token)
    //       setToken(response.data.token)
    //       resolve()
    //     }).catch(error => {
    //       reject(error)
    //     })
    //   })
    // },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        loginApi.logout(state.token).then(() => {
          commit('SET_ROLES', '');
          removeToken();
          clearCookie();
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '');
        removeToken();
        clearCookie();
        resolve();
      });
    }

    // 动态修改权限
    // ChangeRoles({ commit }, role) {
    //   return new Promise(resolve => {
    //     getUserInfo(role).then(response => {
    //       const data = response.data;
    //       commit('SET_ROLES', data.role);
    //       commit('SET_NAME', data.name);
    //       commit('SET_AVATAR', data.avatar);
    //       commit('SET_INTRODUCTION', data.introduction);
    //       resolve();
    //     });
    //   });
    // }
  }
};

export default user;
