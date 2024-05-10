import { client } from './client';

export const postSignup = (body) => {
  return client.post(`/member/join`, body);
};
