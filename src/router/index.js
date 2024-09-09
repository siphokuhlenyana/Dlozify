import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import FeedsView from '../views/FeedsView.vue'
import AccountView from '@/views/AccountView.vue'
import AdminView from '@/views/AdminView.vue'
import ChatView from '@/views/ChatView.vue'
import NotificationsView from '@/views/NotificationsView.vue'

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/',
    name: 'homepage',
    component: HomePage
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue')
  },
  {
    path: '/FeedsView',
    name: 'FeedsView',
    component: FeedsView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue')
  },
  {
    path: '/account',
    name: 'AccountView',
    component: AccountView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue')
  }
  ,
  {
    path: '/settings',
    name: 'Admin',
    component: AdminView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue')
  },
  {
    path: '/messages',
    name: 'Messages',
    component: ChatView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue')
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: NotificationsView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/Homepage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
