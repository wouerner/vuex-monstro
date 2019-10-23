import Vue from 'vue';
import Vuex from 'vuex';
import paragraph from './store/paragraph/index';
import title from './store/title/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    paragraph,
    title
  },
  debug: true,
  strict: true
});
