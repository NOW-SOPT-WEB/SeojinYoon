import { client } from './client';

export const patchChangePw = (body, userId) => {
  return client.patch(`/member/password`, body, {
    headers: {
      ...client.defaults.headers,
      memberId: userId,
    },
  });
};
