import { client } from './client';

export const postLogin = (body) => {
  return client.post(`/member/login`, body);
};
