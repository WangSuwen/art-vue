import router from './router';
// import { Message } from 'element-ui';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { getToken, getCookie } from '@/utils/auth'; // getToken from cookie
import { checkMenus, setUserInfoToStore } from '@/utils/checkMenus';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ['/login', '/authredirect', '/401', '/404']; // no redirect whitelist

/**
 * 路由跳转前，进行权限校验
 */

router.beforeEach((to, from, next) => {
  NProgress.start(); // 开始进度条
  const access_token = getToken();
  const userId = getCookie('userId');
  // 如果在白名单里，则直接进入
  if (whiteList.indexOf(to.path) > -1) {
    next();
  } else if (access_token && userId) { // determine if there has token
    setUserInfoToStore(to, next, router);
    if (to.path === '/login') {
      next({ path: '/' });
      NProgress.done();
    } else {
      // 如果storage 里面没有 menus，则重新查询
      checkMenus(to, next, router, userId);
    }
  } else {
    next('/login'); // 否则全部重定向到登录页
    NProgress.done(); // 结束进度条
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
