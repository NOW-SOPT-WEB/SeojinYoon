import { client } from './client';

export const getUserInfo = (userId) => {
  return client.get(`/member/info`, {
    headers: {
      memberId: userId,
    },
  });
};
