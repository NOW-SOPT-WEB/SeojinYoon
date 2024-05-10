import styled from 'styled-components';
import { useNavigate, useLocation } from 'react-router-dom';

import Button from '../../commons/Button';
import ButtonWrapper from '../../commons/ButtonWrapper';

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate('/signup');
  };
  const onClickMypage = () => {
    navigate(`/mypage/${location.state.userId}`);
  };
  return (
    <MainWrapper>
      <MainImg src="/src/assets/gifs/modalCongrats.gif" loop="infinite" />
      <ButtonWrapper>
        <Button content="MY PAGE" onClick={onClickMypage} />
        <Button content="SIGN UP" onClick={onClickSignup} />
      </ButtonWrapper>
    </MainWrapper>
  );
};
export default Main;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  padding: 5rem 0;
`;

const MainImg = styled.img`
  width: 50rem;
  height: 30rem;

  border-radius: 0.5rem;
`;
