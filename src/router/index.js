import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'


Vue.use(Router)

export default new Router({
  // mode: 'history',
  // mode:'hash',
  routes: [
    {
      // path: '/goods/:goodsId/user/:name',   //动态路由
      path: '/goods',
      name: 'GoodsList',
      components:{
        default:GoodsList,
        title:Title,
        img:Image
      }
       
      // children: [
      //   {
      //     path: 'title',
      //     name: 'title',
      //     component: Title
      //   }, {
      //     path: 'img',
      //     name: 'img',
      //     component: Image
      //   }
      // ]

    }, 
    {
    path: '/Cart/:cartId',
    name: 'Cart',
    component: Cart
  }
  ]
})
