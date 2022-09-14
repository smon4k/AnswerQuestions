import Vue from 'vue'
import App from './App.vue'
import '@/styles/index.scss'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import VueClipboard from 'vue-clipboard2'
import {
  $inputLimit,
  toFixed,
  toolNumber,
  keepDecimalNotRounding
} from './utils/tools'
import { connectWallet, disconnectWallet } from './wallet/connect/metaMask'
import Web3 from 'web3'
import { $post , $get } from '@/utils/request'  
import i18next from 'i18next';
import VueI18Next from '@panter/vue-i18next';
import XHR from 'i18next-xhr-backend';
import LngDetector from 'i18next-browser-languagedetector';
// import visibility from 'vue-visibility-change';
// import Vant from 'vant';
import { 
  Button, 
  Col, 
  Row, 
  Cell, 
  CellGroup,
  Image as VanImage, 
  Popup, 
  Field, 
  Form, 
  Picker, 
  Loading, 
  Notify as VanNotify, 
  Circle, 
  Overlay, 
  PullRefresh,
  Divider,
  Empty,
  List,
  Tag,
  NavBar,
  Tab, 
  Tabs,
  Tabbar, 
  TabbarItem,
  Uploader,
  ActionSheet,
  Card,
  Popover,
  Dialog,
  Toast,
  RadioGroup, 
  Radio
} from 'vant';
Vue.use(Button);
Vue.use(Col);
Vue.use(Row);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(VanImage);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Field);
Vue.use(Picker);
Vue.use(Loading);
Vue.use(VanNotify);
Vue.use(Circle);
Vue.use(Overlay);
Vue.use(PullRefresh);
Vue.use(Divider);
Vue.use(Empty);
Vue.use(List);
Vue.use(Tag);
Vue.use(NavBar);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Uploader);
Vue.use(ActionSheet);
Vue.use(Card);
Vue.use(Popover);
Vue.use(Dialog);
Vue.use(Toast);
Vue.use(Radio);
Vue.use(RadioGroup);

import {
  Icon as ElIcon,
  Row as ElRow,
  Col as ElCol,
  Card as ElCard,
  Button as ElButton,
  Loading as ElLoading,
  Dialog as ElDialog,
  Input as ElInput,
  Tooltip as ElTooltip,
  Table as ElTable,
  TableColumn as ElTableColumn,
  Dropdown as ElDropdown,
  Divider as ElDivider,
  Collapse as ElCollapse,
  CollapseItem as ElCollapseItem,
  Link as ElLink,
  Slider as ElSlider,
  Message as Message,
  Descriptions as ElDescriptions,
  DescriptionsItem as ElDescriptionsItem,
  Empty as ElEmpty,
  Select as ElSelect,
  Option as ElOption,
  // Notification as ElNotification
} from 'element-ui';
Vue.use(ElIcon);
Vue.use(ElRow);
Vue.use(ElCol);
Vue.use(ElCard);
Vue.use(ElButton);
Vue.use(ElLoading);
Vue.use(ElDialog);
Vue.use(ElInput);
Vue.use(ElTooltip);
Vue.use(ElTable);
Vue.use(ElTableColumn);
Vue.use(ElDropdown);
Vue.use(ElDivider);
Vue.use(ElCollapse);
Vue.use(ElCollapseItem);
Vue.use(ElLink);
Vue.use(ElSlider);
Vue.component(Message);
Vue.use(ElDescriptions);
Vue.use(ElDescriptionsItem);
Vue.use(ElEmpty);
Vue.use(ElSelect);
Vue.use(ElOption);
// Vue.use(ElNotification);
Vue.prototype.$message = Message;
// import 'vant/lib/index.css';

// import "./utils/rem";

import axios from 'axios'
Vue.prototype.axios = axios
// Vue.prototype.$notify = ElNotification
import axiosfn from './common/axios.js'; // 对ajax配置
global.axios = axiosfn(axios, router); // 把axios放到全局

if(window.ethereum){
  window.web3 = new Web3(ethereum);
} 
else if(typeof web3 !== 'undefined') {
    window.web3 = new Web3(web3.currentProvider);
    web3.eth.defaultAccount = web3.eth.accounts[0];
} 
else {
    // set the provider you want from Web3.providers
    window.web3 = new Web3(new Web3.providers.HttpProvider("https://bsc-dataseed.binance.org"));
}

// Vue.use(ElementUI);
// Vue.use(Vant);

Vue.use(VueI18Next);

// Vue.use(visibility);
Vue.config.productionTip = false

// 语言包配置
i18next.use(XHR).use(LngDetector).init({
  // lng: 'en', // 设定语言
  fallbackLng: 'zh', // 默认语言包
  ns: ['public', 'nav', 'question', 'swap', 'liquidity'],
  defaultNS: 'public',
  backend: {
      loadPath: '/static/locales/{{lng}}/{{ns}}.json'
  },
  detection: {
      // order and from where user language should be detected
      order: ['localStorage'],
      // cache user language on
      caches: ['localStorage']
  },
});

const i18n = new VueI18Next(i18next);

Object.assign(Vue.prototype, {
  $inputLimit,
  $connect:connectWallet,
  $disconnect:disconnectWallet,
  toFixed,
  keepDecimalNotRounding,
  $get,
  $post,
  toolNumber
})

window.__ownInstance__ = new Vue({
  store,
  router,
  i18n: i18n,
  render: h => h(App),
}).$mount('#app')
