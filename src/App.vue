<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import storage from './storage/index'
export default {
  name: 'app',
  mounted () {
    console.log(storage.getStorage())
  }

}
</script>

<style lang="less">

</style>
