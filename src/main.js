import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import store from './store'
import App from './App.vue'
// import env from './env.js'

// mock 开关
const mock = true
if (mock) {
  require('./mock/api.js')
}
axios.defaults.baseURL = 'https://nei.netease.com/api/apimock-v2/a5d5d7cc528cdd13d799bced27da0e55/api'
axios.defaults.timeout = 8000
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
