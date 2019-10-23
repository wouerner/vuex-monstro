import * as types from './types';
import * as api from '@/api/title';

export const updateAction = ({ commit }, data) => {
  api.update(data)
    .then((/*r*/) => {
      // commit(types.UPDATE_TITLE, r.data);
      // com valor local sem ajax
      commit(types.UPDATE_TITLE, data);
    }).catch((e) => {
       throw new TypeError(e, 'error', 10);
    });
};
