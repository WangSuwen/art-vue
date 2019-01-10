const getters = {
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  role: state => state.user.role,
  menus: state => state.user.menus,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  errorLogs: state => state.errorLog.logs
};
export default getters;
