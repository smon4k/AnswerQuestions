import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'

export const constantRoutes = [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home/index'),
          meta: { title: 'home', keepAlive: true, isBottomNav: true, }
        },
        //开始答题
        {
          path: 'answer',
          name: 'answer',
          component: () => import('@/views/answer/index'),
          meta: { title: 'answer', keepAlive: false, isBottomNav: false, }
        },
        {
          path: 'score',
          name: 'score',
          component: () => import('@/views/answer/score'),
          meta: { title: 'score', keepAlive: false, isBottomNav: true, }
        },
        {
          path: 'user',
          name: 'user',
          component: () => import('@/views/user/index'),
          meta: { title: 'score', keepAlive: false, isBottomNav: true, }
        },
        {
          path: 'ranking',
          name: 'ranking',
          component: () => import('@/views/ranking/index'),
          meta: { title: 'score', keepAlive: false, isBottomNav: true, }
        },
        //充提
        // {
        //   path: 'depositWithdrawal',
        //   name: 'depositWithdrawal',
        //   component: () => import('@/views/depositWithdrawal/index'),
        //   meta: { title: 'depositWithdrawal', keepAlive: false }
        // },
      ]
    },
]

const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router