import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    breadListState: [
      { name: '首页', path: '/' },
      { name: '图书', path: '/book' },
      { name: '关于', path: '/about' }
    ]
  },
  mutations: {
    breadListStateAdd(obj) {
      this.breadListState.push(obj);
    },
    breadListStateRemove(state, num) {
      state.breadListState = state.breadListState.slice(0, num);
    }
  }
});
