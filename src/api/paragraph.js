import * as http from './http';

export const update = function () {
  return http.getRequest('https://private-1441f-vuexmonstro.apiary-mock.com/paragraph');
};
