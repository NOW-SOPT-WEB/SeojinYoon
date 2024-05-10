import { useEffect, useState } from 'react';
import { getUserInfo } from '../apis/getUserInfo';

const useGetUserInfo = (userId) => {
  const [userInfo, setUserInfo] = useState({
    authenticationId: '',
    nickname: '',
    phone: '',
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await getUserInfo(userId);
        setUserInfo(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserInfo();
  }, [userId]);

  return userInfo;
};

export default useGetUserInfo;
