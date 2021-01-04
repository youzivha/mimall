import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home.vue'
import Index from '../pages/index.vue'
import Product from '../pages/product.vue'
import Detail from '../pages/detail.vue'
import Cart from '../pages/cart.vue'
import Order from '../pages/order.vue'
import OrderConfirm from '../pages/orderConfirm.vue'
import OrderList from '../pages/orderList.vue'
import OrderPay from '../pages/orderPay.vue'
import AliPay from '../pages/alipay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'Product',
        component: Product
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
      }
    ]
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    children: [
      {
        path: 'confirm',
        name: 'OrderConfirm',
        component: OrderConfirm
      },
      {
        path: 'list',
        name: 'OrderList',
        component: OrderList
      },
      {
        path: 'pay',
        name: 'OrderPay',
        component: OrderPay
      },
      {
        path: 'alipay',
        name: 'AliPay',
        component: AliPay
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
