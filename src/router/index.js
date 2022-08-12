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
      //每日奖励排行
      {
        name: 'awardList',
        path: "/award/list",
        component: resolve => require(['../views/award/list.vue'], resolve),
        name: "awardList",
        meta: {
          title: 'awardList',
          keepAlive: false,
          isBottomNav: true,
        },
      },
      //门票列表
      {
        name: 'ticketList',
        path: "ticket/list",
        // redirect: '/home',
        // component: resolve => require(['@/views/home/index.vue'], resolve),
        component: () => import('@/views/ticket/list'),
        meta: {
          title: 'ticketList',
          keepAlive: true,
          isBottomNav: true,
        },
      },
      //门票详情
      {
        name: 'ticketDetail',
        path: "ticket/detail",
        // redirect: '/home',
        // component: resolve => require(['@/views/home/index.vue'], resolve),
        component: () => import('@/views/ticket/detail'),
        meta: {
          title: 'ticketDetail',
          keepAlive: false,
          isBottomNav: true,
        },
      },
      {
        name: 'ticketMyDetail',
        path: "ticket/my/list",
        // redirect: '/home',
        // component: resolve => require(['@/views/home/index.vue'], resolve),
        component: () => import('@/views/ticket/my'),
        meta: {
          title: 'ticketMyDetail',
          keepAlive: false,
          isBottomNav: true,
        },
      },
      //我的门票奖励
      {
        name: 'ticketMyAward',
        path: "ticket/my/award",
        component: () => import('@/views/ticket/award'),
        meta: {
          title: 'ticketMyAward',
          keepAlive: false,
          isBottomNav: true,
        },
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