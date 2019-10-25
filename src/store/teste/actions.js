import * as types from './types';
import * as api from '@/api/teste';

export const insertAction = ({ commit }, data) => {
  api.insert(data)
    .then((r) => {
      commit(types.INSERT_TEST, r.data);
      // dispatch('title/updateAction', rootState.title.title + ' Novidades', {root: true});
      // com valor local sem ajax
      // commit(types.UPDATE_PARAGRAPH, data);
    }).catch((e) => {
       throw new TypeError(e, 'error', 10);
    });
};
