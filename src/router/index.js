import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from '@/layout'

const originalPush = Router.prototype.push
// 修改 原型对象中的push方法
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err=>err)
}

export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: resolve => require(['@/views/home/index'], resolve),
        meta: { title: 'home', keepAlive: true, isBottomNav: false, }
      },
      {
        path: 'bank',
        name: 'bank',
        component: resolve => require(['@/views/user/bank'], resolve),
        meta: { title: 'bank', keepAlive: true, isBottomNav: false, }
      },
      //开始答题
      {
        path: 'answer',
        name: 'answer',
        component: resolve => require(['@/views/answer/index'], resolve),
        meta: { title: 'answer', keepAlive: false, isBottomNav: false, }
      },
      {
        path: 'score',
        name: 'score',
        component: resolve => require(['@/views/answer/score'], resolve),
        meta: { title: 'score', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'user',
        name: 'user',
        component: resolve => require(['@/views/user/index'], resolve),
        meta: { title: 'score', keepAlive: false, isBottomNav: true, }
      },
      {
        name: 'userSetup',
        path: "/user/setup",
        component: resolve => require(['@/views/user/setup'], resolve),
        meta: { title: 'score', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'login',
        name: 'login',
        component: resolve => require(['@/views/user/login'], resolve),
        meta: { title: 'login', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'regist',
        name: 'regist',
        component: resolve => require(['@/views/user/regist'], resolve),
        meta: { title: 'regist', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'ranking',
        name: 'ranking',
        component: resolve => require(['@/views/ranking/index'], resolve),
        meta: { title: 'score', keepAlive: false, isBottomNav: true, }
      },
      //每日奖励排行
      {
        name: 'awardList',
        path: "/award/list",
        component: resolve => require(['@/views/award/list'], resolve),
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
      // 兑换
      {
        path: 'swap',
        name: 'swap',
        component: resolve => require(['@/views/swap/index'], resolve),
        meta: { title: 'swap', keepAlive: false }
      },
      // 流动性
      {
        path: '/Liquidity',
        name: 'Liquidity',
        component: resolve => require(['@/views/liquidity/index'], resolve),
        meta: { 
          title: 'Liquidity',
          keepAlive: false 
        }
      },
      {
        path: 'Liquidity/add',
        name: 'LiquidityAdd',
        component: () => import('@/views/liquidity/add'),
        meta: { 
          title: 'LiquidityAdd',
          keepAlive: false 
        }
      },
      {
        path: 'Liquidity/remove',
        name: 'LiquidityRemove',
        component: () => import('@/views/liquidity/remove'),
        meta: { 
          title: 'LiquidityRemove',
          keepAlive: false 
        }
      },
      // 存币生息
      {
        path: 'deposit',
        name: 'deposit',
        component: resolve => require(['@/views/deposit/index'], resolve),
        meta: { title: 'deposit', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'my/deposit',
        name: 'myDeposit',
        component: resolve => require(['@/views/deposit/myDeposit'], resolve),
        meta: { title: 'deposit', keepAlive: false, isBottomNav: true, }
      },
      {
        path: 'my/deposit/list',
        name: 'myDepositList',
        component: resolve => require(['@/views/deposit/userDetailsList'], resolve),
        meta: { title: 'deposit', keepAlive: false, isBottomNav: true, }
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