/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import { postSignup } from '../apis/postSignup';

const usePostSignup = () => {
  const navigate = useNavigate();

  const submitSignup = async (inputVal) => {
    try {
      const response = await postSignup(inputVal);
      const memberId = response.headers.location;

      alert('🥳 회원가입이 성공적으로 완료되었습니다! 🥳');
      navigate('/login');
    } catch (error) {
      console.log(error);
      if (error.response) {
        const status = error.response.status;
        if (status === 400) {
          alert(error.response.data.message);
        }
      }
    }
  };

  return { submitSignup };
};

export default usePostSignup;
