import request from '@/utils/request';

const loginApi = {
  loginByUsername({ username, password }) {
    return request({
      url: '/auth/login',
      method: 'post',
      data: {
        username,
        password
      }
    });
  },
  logout() {
    return request({
      url: '/auth/logout',
      method: 'post'
    });
  },
  getUserInfo(token) {
    return request({
      url: '/user/info',
      method: 'get',
      params: { token }
    });
  }
};
export default loginApi;
