import { useNavigate } from 'react-router-dom';
import { postLogin } from '../apis/postLogin';

const usePostLogin = () => {
  const navigate = useNavigate();

  const submitLogin = async (inputVal) => {
    try {
      const response = await postLogin(inputVal);
      const userId = response.headers.location;

      navigate(`/mypage/${userId}`);
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 400 || status === 404 || status === 401) {
          alert(error.response.data.message);
        }
      }
    }
  };

  return { submitLogin };
};

export default usePostLogin;
