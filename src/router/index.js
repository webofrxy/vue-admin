import Vue from 'vue'
import Router from 'vue-router'
import { resolve } from 'url';

const Home = ()=> import('@/pages/Home');
const Dashboard = ()=> import('@/pages/Dashboard');

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/dashboard',
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{title:'首页'},
      children:[
        {
          path:'/dashboard',
          component: Dashboard,
          meta:{title: '控制面板'}
        }
      ]
    }
  ]
})
