/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import ButtonWrapper from '../../commons/ButtonWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';
import LoginSignupWrapper from '../../commons/LoginSignupWrapper';

import usePostLogin from '../../hooks/usePostLogin';

import { LOGIN_LABEL } from '../../assets/constants/constants';

const initialLoginState = {
  authenticationId: '',
  password: '',
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case 'ID':
      return {
        ...state,
        authenticationId: action.value,
      };
    case 'PW':
      return {
        ...state,
        password: action.value,
      };
  }
};

const Login = () => {
  const navigate = useNavigate();
  const [inputVal, dispatch] = useReducer(reducerFn, initialLoginState);

  const { submitLogin } = usePostLogin();

  const onClickLogin = () => {
    submitLogin(inputVal);
  };

  const onClickSignup = () => {
    navigate('/signUp');
  };

  const onChangeHandler = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  return (
    <LoginSignupWrapper title="LOGIN">
      <LoginImg src="./src/assets/img/loginImg.jpeg" alt="로그인 이미지" />
      {LOGIN_LABEL.map((label, idx) => (
        <Input key={label + idx.toString()} label={label.label} onChangeHandler={onChangeHandler} />
      ))}
      <ButtonWrapper>
        <Button content="LOGIN" $buttonColor="blue" onClick={onClickLogin}></Button>
        <Button content="SIGN UP" $buttonColor="blue" onClick={onClickSignup}></Button>
      </ButtonWrapper>
    </LoginSignupWrapper>
  );
};

export default Login;

const LoginImg = styled.img`
  width: 13rem;
  height: 13rem;

  border-radius: 0.5rem;

  object-fit: cover;
`;
