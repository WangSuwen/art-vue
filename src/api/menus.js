import request from '@/utils/request';

const menusApi = {
  /**
   * 获取 菜单列表
   * @param {String} userId
   */
  getMenuList(userId) {
    return request({
      url: '/menu/list',
      method: 'get',
      params: {
        userId
      }
    });
  },
  createMenu({ userId, menus }) {
    return request({
      url: '/menu/createMenu',
      method: 'post',
      data: {
        userId,
        menus
      }
    });
  }
};
export default menusApi;
