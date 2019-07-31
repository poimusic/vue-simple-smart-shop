import Vue from 'vue'
import Router from 'vue-router'
import '../assets/css/header.css'
import '../assets/css/reset.css'
import Home from '../views/home'
import MPhone from '../views/mPhone'
import PageOne from '../views/page_one'
import Shop from '@/views/shop'
import PageTwo from '../views/page_two'
import PageThree from '../views/page_three'
import PageFour from '../views/page_four'
import PageFive from '../views/page_five'
import Item from '@/views/item'
import Cart from '@/views/cart'
import Checkout from '@/views/checkout'
import Payment from '@/views/payment'
import Account from '@/views/account'
import Order from '@/views/account/order'
import Address from '@/views/account/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path: '/MPhone',
      component: MPhone
    },
    {
      path: '/PageOne',
      component: PageOne
    },
    {
      path: '/Shop',
      component: Shop
    },
    {
      path: '/PageTwo',
      component: PageTwo
    },
    {
      path: '/PageThree',
      component: PageThree
    },
    {
      path: '/PageFour',
      component: PageFour
    },
    {
      path: '/PageFive',
      component: PageFive
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'Checkout',
      component: Checkout
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/account',
      component: Account,
      children: [
        {
          path: '',
          name: 'Account',
          component: Order
        },
        {
          path: '/address',
          name: 'Address',
          component: Address
        }
      ]
    }
  ]
})
