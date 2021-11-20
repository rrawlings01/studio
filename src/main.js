
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"

import Goods from './components/goods/Goods';

import order from './components/order/order';
import Ratings from "./components/ratings/Ratings"
import Seller from "./components/seller/Seller"
import login from "./components/login"
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.use(Vant);
const routes = [
  {path: "/", redirect: "/login"},
  {path: "/login", component: login},
  {path: "/order", component: order},
  {path: "/goods", component: Goods},
  {path: "/ratings", component: Ratings},
  {path: "/seller", component: Seller}
]

const router = new VueRouter({
  routes,
  mode:"history",
  linkActiveClass:"active"
})

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
