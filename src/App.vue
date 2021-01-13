<template>
  <div id="app">
    <router-view></router-view>
    {{res}}
  </div>
</template>
<script>

export default {
  name: 'app',
  data () {
    return {
      res: {}
    }
  },
  mounted () {
    // 本地json文件
    // this.axios.get('/mock/user/login.json')
    //   .then(res => {
    //     this.res = res
    //   })
    // mockjs
    this.axios.get('/user/login')
      .then(res => {
        this.res = res
        console.log(res)
      })
  }

}
</script>

<style lang="less">

</style>
