/* eslint-disable no-unused-vars */
import { patchChangePw } from '../apis/patchChangePw';
import { useNavigate } from 'react-router-dom';

const usePatchChangePw = () => {
  const navigate = useNavigate();

  const submitChangePw = async (inputVal, userId) => {
    const { inputVoidErrorMessage, ...requestBody } = inputVal;
    try {
      const response = await patchChangePw(requestBody, userId);
      alert(`✨ ${response.data.message} ✨`);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        const status = error.response.status;
        if (status === 400 || status === 403) {
          alert(error.response.data.message);
        }
      }
    }
  };

  return { submitChangePw };
};

export default usePatchChangePw;
