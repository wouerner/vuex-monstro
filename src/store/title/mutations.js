import * as types from './types';

export const state = {
  title: ''
}

export const mutations = {
  [types.UPDATE_TITLE](state, data) {
    state.title = data;
  },
}
