import { param2Obj } from '@/utils';

const userMap = {
  admin: {
    data: {
      roles: ['admin'],
      token: 'admin',
      introduction: '我是超级管理员',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Super Admin'
    },
    code: 200
  },
  editor: {
    data: {
      roles: ['editor'],
      token: 'editor',
      introduction: '我是编辑',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Normal Editor'
    },
    code: 200
  }
};
export default {
  getUserInfo: config => {
    if (userMap['admin']) {
      return userMap['admin'];
    } else {
      return false;
    }
  },
  logout: () => 'success'
};
