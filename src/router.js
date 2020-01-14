import Vue from 'vue'
import Router from 'vue-router'
import dice from './views/dice.vue'
import EvenandOddNumbers from './views/EvenandOddNumbers.vue'
import countingCharacters from './views/countingCharacters.vue'
import findMax from './views/findMax.vue'
import profile from './views/profile.vue'
import viewsMousetracking from './views/Mousetracking.vue'
import luckySevens from './views/luckySevens.vue'
import restaurant from './views/restaurant.vue'
import Menu from './views/Menu.vue'
import Contact from './views/Contact.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
    path:'/Contact',
    name:'Contact',
    component: Contact
    },
   {
    path:'/Menu',
    name: 'Menu',
    component: Menu
    },
    {
    path: '/restaurant',
    name: 'restaurant',
    component: restaurant
  },
    {
      path: '/luckySevens',
      name: 'luckySevens',
      component: luckySevens
    },
    {
      path: '/viewsMousetracking',
      name: 'viewsMousetracking',
      component: viewsMousetracking
    },
    {
      path: '/',
      name: 'profile',
      component: profile
    },
    {
      path: '/dice',
      name: 'dice',
      component: dice
    },
    {
      path: '/EvenandOddNumbers',
      name: 'EvenandOddNumbers',
      component: EvenandOddNumbers
    },
    {
      path: '/countingCharacters',
      name: 'countingCharacters',
      component: countingCharacters
    },
    {
      path: '/findMax',
      name: 'findMax',
      component: findMax
    }


  ]
})
