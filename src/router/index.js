import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    //商品组件路由
    {path:'/goods', name:'goods', component:goods},

    //评价组件路由
    {path:'/ratings', name:'ratings', component:ratings},

    //商家组件路由
    {path:'/seller', name:'seller', component:seller}
  ]
})
