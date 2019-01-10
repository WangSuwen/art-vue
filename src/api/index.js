import loginApi from './login';
import menusApi from './menus';

export default {
  methods: {
    ...loginApi,
    ...menusApi
  }
};
