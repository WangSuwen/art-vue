import { constantRouterMap } from '@/router';

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param asyncRouterMap
 * @param menus 可用菜单
 */
function filterAsyncRouter(asyncRouterMap, menus) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (!route.path || menus.indexOf(route.path) > -1) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, menus);
      }
      return true;
    }
    return false;
  });
  return accessedRouters;
}

const permission = {
  state: {
    routers: constantRouterMap
  },
  mutations: {
    SET_ROUTERS: (state, data) => {
      debugger;
      const { role, menus } = data;
      if (role !== 'admin') {
        state.routers = filterAsyncRouter(constantRouterMap, menus);
      } else {
        state.routers = constantRouterMap;
      }
    }
  },
  actions: { }
};

export default permission;
