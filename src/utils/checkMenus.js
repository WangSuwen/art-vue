
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
  if (store.getters.role === 'admin') {
    next();
  } else if (store.getters.menus.length === 0) {
    mixinMethods.getUserMenuList(userId).then((menuList) => {
      // mixinMethods.setMenus(menuList.menus);
      store.commit('SET_MENUS', menuList.menus);
      store.commit('SET_ROUTERS', {
        role: store.getters.role,
        menus: menuList.menus
      });
      router.push({ path: '/' });
    }).catch(() => {
      console.error('获取用户权限菜单失败');
    });
  } else if (hasPermission(store.getters.menus, to.path)) {
    next();
  } else {
    next({ path: '/401', replace: true, query: { noGoBack: true }});
  }
}
export function setUserInfoToStore(to, next, router) {
  const store = router.app.$options.store;
  const mixinMethods = router.app.$options.methods;
  if (!store.getters.menus.length || !store.getters.permission_routers.length ||!store.getters.role || !store.getters.avatar) {
    store.commit('SET_USERINFO', mixinMethods.getUserInfoFromStorage());
    store.commit('SET_ROUTERS', {
      role: mixinMethods.getUserInfoFromStorage().role,
      menus: mixinMethods.getUserInfoFromStorage().menus
    });
  }
}

export function is404(currentRouter, routers) {
  let is404 = true;
  let reg;
  for (let i = 0; i < routers.length; i++) {
    routers[i].path ? reg = new RegExp(routers[i].path) : '';
    if (!routers[i].path) {
      if (currentRouter === '/dashboard') {
        is404 = false;
        break;
      }
      continue;
    } else if (reg.test(currentRouter)) {
      is404 = false;
      break;
    }
  }
  return is404;
}
