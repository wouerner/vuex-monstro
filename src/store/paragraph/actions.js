import * as types from './types';
import * as api from '@/api/paragraph';

export const updateAction = ({ commit }, data) => {
  api.update(data)
    .then((r) => {
      commit(types.UPDATE_PARAGRAPH, r.data);
      // com valor local sem ajax
      //e commit(types.UPDATE_PARAGRAPH, data);
    }).catch((e) => {
       throw new TypeError(e, 'error', 10);
    });
};
