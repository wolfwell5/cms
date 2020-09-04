import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Summary from '@/components/Summary'
import Login from '@/views/login'
import Success from '@/views/success'
import HomeLayOut from '@/views/HomeLayOut'
import ContractFormInput from "@/components/ContractFormInput";
import ContractFormInputExpend from "@/components/ContractFormInputExpend";

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

// export default new Router({
const router = new Router({
  scrollBehavior: () => ({y: 0}),
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomeLayOut',
      component: HomeLayOut,
      children: [
        {
          path: '/summary',
          name: 'summary',
          component: Summary
        },
        {
          path: '/inputIncome/',
          name: 'ContractFormInput',
          component: ContractFormInput
        },
        {
          path: '/inputExpend/',
          name: 'ContractFormInputExpend',
          component: ContractFormInputExpend
        },
      ],
      redirect: "/summary",  //这段代码
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})

// 全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log('to name', to);
//   console.log('from name', from);
//   if (to.name === from.name && to.query.type !== from.query.type) {
//     next({name: 'empty', query: {toPath: to.fullPath}})
//   } else {
//     next()
//   }
//
// });
//
// // 中间过渡路由
// console.log('to path', this.router);
// // let toPath = this.router.query.toPath
// if (this.toPath) {
//   this.$router.push({path: this.toPath})
// }


export default router;
