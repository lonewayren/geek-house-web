import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import requests from './utils/requests';
import 'ant-design-vue/dist/antd.css';
import VueWechatTitle from 'vue-wechat-title';
import { Icon } from 'ant-design-vue';

Vue.use(VueWechatTitle);
Vue.use(Antd);

Vue.config.productionTip = false;
Vue.prototype.$requests = requests;

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_1232880_5esyn61fshs.js'
});

Vue.component('icon-font', IconFont);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
