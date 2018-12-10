import Vue from 'vue'
import Router from 'vue-router'

//首页
import index from '../components/index'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    }
    // {
    //   path:'/list',
    //   component:list
    // },
    // {
    //   path:'/collaborate',
    //   component:collaborate
    // },
    // {
    //   path:'/site',
    //   component:site
    // },
    // {
    //   path:'/index',
    //   component:index
    // }
  ]
})
