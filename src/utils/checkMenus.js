
function hasPermission(menus, toPath) {
  return menus.indexOf(toPath) > -1;
}

/**
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
    // 没有动态改变权限的需求可直接next() 删除下方权限判断 ↓
    if (hasPermission(store.getters.menus, to.path)) {
      next();//
    } else {
      next({ path: '/401', replace: true, query: { noGoBack: true }});
    }
  }
}
export function setUserInfoToStore(to, next, router) {
  const store = router.app.$options.store;
  const mixinMethods = router.app.$options.methods;
  if (!store.getters.menus.length || !store.getters.role || !store.getters.avatar) {
    store.commit('SET_AVATAR', mixinMethods.getUserInfoFromStorage().avatar);
    store.commit('SET_ROLE', mixinMethods.getUserInfoFromStorage().role);
    store.commit('SET_MENUS', mixinMethods.getUserInfoFromStorage().menus);
    store.commit('SET_ROUTERS', { role: mixinMethods.getUserInfoFromStorage().role, menus: mixinMethods.getUserInfoFromStorage().menus });
  }
}
