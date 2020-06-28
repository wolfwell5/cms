import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
// import Home from '../components/Home'
import Login from '@/views/login'

Vue.use(Router)

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      // name: 'HelloWorld',
      name: 'Home',
      // component: HelloWorld
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})
