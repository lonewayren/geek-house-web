import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import requests from './utils/requests';
import 'ant-design-vue/dist/antd.css';
import VueWechatTitle from 'vue-wechat-title';

Vue.use(VueWechatTitle);
Vue.use(Antd);

Vue.config.productionTip = false;
Vue.prototype.$requests = requests;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
