import request from '@/utils/request'

export function getUserList(limit, currentPage) {
  return request({
    url: 'users',
    method: 'get',
    params: {
      limit,
      currentPage
    }
  })
}

