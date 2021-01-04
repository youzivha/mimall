<template>
  <div>
    <p>cart</p>
    <cart-header></cart-header>
    <router-view></router-view>
    <nav-footer></nav-footer>

  </div>
</template>

<script>
import CartHeader from '../components/CartHeader.vue'
import NavFooter from '../components/NavFooter.vue'
export default {
  components: {
    CartHeader,
    NavFooter
  }
}
</script>

<style>

</style>
