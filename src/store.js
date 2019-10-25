import Vue from 'vue';
import Vuex from 'vuex';
import paragraph from './store/paragraph/index';
import title from './store/title/index';
import teste from './store/teste/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    paragraph,
    title,
    teste
  },
  debug: true,
  strict: true
});
