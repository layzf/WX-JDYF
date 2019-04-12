import { ajax, request } from './request.js';

class api extends request {

  getsession(codes) {
  return this.request({
    url: 'api/index/buildSession',
    method: 'GET',
    data: {code: codes}
  })
}
// 首页banner图片
  bannerInfo() {
    return this.request({
      url: 'bannerInfo/bannerList',
      method: 'GET',
      data: {}
    })
  }
  //首页内容部分
  indexList() {
    return this.request({
      url: 'apiIndex/indexList',
      method: 'GET',
      data: {}
    })
  }
  //项目详情
  projectInfo(id) {
    return this.request({
      url: `api/projectInfo/view/${id}`,
      method: 'GET',
      data: {}
    })
  }
}

export  { api}