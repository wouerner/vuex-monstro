import * as types from './types';

export const state = {
  teste: 'teste 123'
}

export const mutations = {
  [types.INSERT_TEST](state, data) {
    state.teste = data;
  },
}
