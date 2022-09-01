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
        component: (resolve) => require(['@/views/home/index'], resolve),
        meta: { title: 'home', keepAlive: true, isBottomNav: false, }
      },
      //开始答题
      {
        path: 'answer',
        name: 'answer',
        component: (resolve) => require(['@/views/answer/index'], resolve),
        meta: { title: 'answer', keepAlive: false, isBottomNav: false, }
      },
      {
        path: 'score',
        name: 'score',
        component: (resolve) => require(['@/views/answer/score'], resolve),
        meta: { title: 'score', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'user',
        name: 'user',
        component: (resolve) => require(['@/views/user/index'], resolve),
        meta: { title: 'score', keepAlive: false, isBottomNav: true, }
      },
      {
        name: 'userSetup',
        path: "/user/setup",
        component: (resolve) => require(['@/views/user/setup'], resolve),
        meta: { title: 'score', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'login',
        name: 'login',
        component: (resolve) => require(['@/views/user/login'], resolve),
        meta: { title: 'login', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'regist',
        name: 'regist',
        component: (resolve) => require(['@/views/user/regist'], resolve),
        meta: { title: 'regist', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'ranking',
        name: 'ranking',
        component: (resolve) => require(['@/views/ranking/index'], resolve),
        meta: { title: 'score', keepAlive: false, isBottomNav: true, }
      },
      //每日奖励排行
      {
        name: 'awardList',
        path: "/award/list",
        component: resolve => require(['../views/award/list'], resolve),
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
        component: resolve => require(['@/views/ticket/list'], resolve),
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
        component: resolve => require(['@/views/ticket/detail'], resolve),
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
        component: resolve => require(['@/views/ticket/my'], resolve),
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
        component: resolve => require(['@/views/ticket/award'], resolve),
        meta: {
          title: 'ticketMyAward',
          keepAlive: false,
          isBottomNav: true,
        },
      },
      //充提
      {
        path: 'usdt',
        name: 'usdt',
        component: resolve => require(['@/views/depositWithdrawal/usdt'], resolve),
        meta: { title: 'usdt', keepAlive: false }
      },
      {
        path: 'sct',
        name: 'sct',
        component: resolve => require(['@/views/depositWithdrawal/sct'], resolve),
        meta: { title: 'sct', keepAlive: false }
      },
      {
        path: 'sst',
        name: 'sst',
        component: resolve => require(['@/views/depositWithdrawal/sst'], resolve),
        meta: { title: 'sst', keepAlive: false }
      },
    ]
  },
]

const createRouter = () => new Router({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export default router