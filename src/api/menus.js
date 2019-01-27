import request from '@/utils/request';

const menusApi = {
  /**
   * 获取 用户权限菜单列表
   * @param {String} userId
   */
  getUserMenuList(userId) {
    return request({
      url: '/userMenu/list',
      method: 'get',
      params: {
        userId
      }
    });
  },
  // 创建 用户权限 菜单
  createUserMenu({ userId, menus }) {
    return request({
      url: '/userMenu',
      method: 'post',
      data: {
        userId,
        menus
      }
    });
  },
  // 添加 菜单
  addMenus(data) {
    return request({
      url: '/menus',
      method: 'post',
      data
    });
  },
  // 修改 菜单
  updateMenu(data) {
    return request({
      url: '/menus/update',
      method: 'post',
      data
    });
  },
  // 获取 菜单 列表
  getMenus() {
    return request({
      url: '/menus',
      method: 'get'
    });
  },
  // 删除 菜单 列表
  delMenus() {
    return request({
      url: '/menus/delete',
      method: 'post'
    });
  }
};
export default menusApi;
