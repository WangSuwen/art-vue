export default {
  methods: {
    /**
     * @param {Array} menus 用户的有权限的菜单列表
     * @param {Storage} storage localStorage sessionStorage
     */
    setMenus(menus, storage = window.localStorage) {
      storage.setItem('menus', JSON.stringify(menus));
    },
    getMenus(storage = window.localStorage) {
      return JSON.parse(storage.getItem('menus') || '[]');
    },
    setRole(role, storage = window.localStorage) {
      storage.setItem('role', role);
    },
    getRole(storage = window.localStorage) {
      return storage.getItem('role');
    },
    setUserId(userId, storage = window.localStorage) {
      storage.setItem('userId', userId);
    },
    getUserId(storage = window.localStorage) {
      return storage.getItem('userId');
    },
    setUserInfoToStorage(userInfo, storage = window.localStorage) {
      storage.setItem('userInfo', JSON.stringify(userInfo));
    },
    getUserInfoFromStorage(storage = window.localStorage) {
      return JSON.parse(storage.getItem('userInfo') || '[]');
    }
  }
};
