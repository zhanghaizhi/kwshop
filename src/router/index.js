import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import bookdetails from '@/pages/bookdetails'
import submit_order from '@/pages/submit_order'
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/',
      redirect: '/home'
    },
     {
      path: '/home',
      name: 'home',
      component: home
    },
     {
      path: '/bookdetails/:id',
      name: 'bookdetails',
      component: bookdetails
    },
    {
      path: '/submit_order',
      title:"下订单",
      name: 'submit_order',
      component: submit_order
    }
  ]
})
