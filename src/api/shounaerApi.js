import request from '@/utils/request';

export function getApiList(limit, currentPage) {
  return request({
    url: 'shounaer/managementApiList',
    method: 'get',
    params: {
      limit,
      currentPage
    }
  });
}
export function addApi({ apiName, apiPath, apiResponse }) {
  return request({
    url: 'shounaer/managementAddApi',
    method: 'post',
    data: {
      params: { apiName, apiPath, apiResponse }
    }
  });
}
export function updateApi(params) {
  return request({
    url: 'shounaer/managementUpdateApi',
    method: 'post',
    data: {
      params
    }
  });
}

