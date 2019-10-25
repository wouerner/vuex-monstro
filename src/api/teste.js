import * as http from './http';

export const insert = function () {
  return http.getRequest('https://private-1441f-vuexmonstro.apiary-mock.com/title');
};
