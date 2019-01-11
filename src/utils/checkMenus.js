
function hasPermission(menus, toPath) {
  if (toPath.indexOf('dashboard') > -1) {
    return true;
  }
  const menu = menus.find(menu => {
    return toPath.search(menu) > -1;
  });
  return menu;
  // return menus.indexOf(toPath) > -1;
}

/**
 * 检查用户是否有权限
 * @param {*} to
 * @param {*} next
 * @param {*} router
 * @param {String} userId 用户ID
 */
export function checkMenus(to, next, router, userId) {
  const mixinMethods = router.app.$options.methods;
  const store = router.app.$options.store;
  if (store.getters.menus.length === 0) {
    mixinMethods.getMenuList(userId).then((menuList) => {
      // mixinMethods.setMenus(menuList.menus);
      store.commit('SET_MENUS', menuList.menus);
      router.push({ path: '/' });
    }).catch(() => {
      console.error('获取用户权限菜单失败');
    });
  } else {
    // 没有动态改变权限的需求可直接next()
    if (store.getters.role === 'admin' || hasPermission(store.getters.menus, to.path)) {
      next();
    } else {
      next({ path: '/401', replace: true, query: { noGoBack: true }});
    }
  }
}
export function setUserInfoToStore(to, next, router) {
  const store = router.app.$options.store;
  const mixinMethods = router.app.$options.methods;
  if (!store.getters.menus.length || !store.getters.role || !store.getters.avatar) {
    store.commit('SET_USERINFO', mixinMethods.getUserInfoFromStorage());
    store.commit('SET_ROUTERS', { role: mixinMethods.getUserInfoFromStorage().role, menus: mixinMethods.getUserInfoFromStorage().menus });
  }
}
