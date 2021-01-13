import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  status: 0,
  data: {
    'id|10001-99999': 0,
    username: '@cname',
    email: 'aaa@163.com',
    phone: null,
    role: 0,
    createTime: 1479048325000,
    updateTime: 1479048325000
  }

})
