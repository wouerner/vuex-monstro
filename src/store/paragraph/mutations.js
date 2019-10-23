import * as types from './types';

export const state = {
  paragraph: ''
}

export const mutations = {
  [types.UPDATE_PARAGRAPH](state, data) {
    state.paragraph = data;
  },
}
