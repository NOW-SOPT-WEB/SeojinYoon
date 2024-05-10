/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useReducer } from 'react';

import LoginSignupWrapper from '../../commons/LoginSignupWrapper';
import ButtonWrapper from '../../commons/ButtonWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';

import { SIGNUP_LABEL } from '../../assets/constants/constants';

import usePostSignup from '../../hooks/usePostSignup';

const initialSignUpState = {
  authenticationId: '',
  password: '',
  nickname: '',
  phone: '',
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
    case '닉네임':
      return {
        ...state,
        nickname: action.value,
      };
    case '전화번호':
      return {
        ...state,
        phone: action.value,
      };
  }
};

const Signup = () => {
  const navigate = useNavigate();
  const [inputVal, dispatch] = useReducer(reducerFn, initialSignUpState);

  const { submitSignup } = usePostSignup();

  const onChangeHandler = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  const onClickSignup = () => {
    submitSignup(inputVal);
  };

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <LoginSignupWrapper title="SIGN UP">
      {SIGNUP_LABEL.map((label, idx) => (
        <Input key={label + idx.toString()} label={label.label} onChangeHandler={onChangeHandler}>
          {label.detailExist && <InputDetail>{label.detail}</InputDetail>}
        </Input>
      ))}
      <ButtonWrapper>
        <Button content="SIGN UP" $buttonColor="blue" onClick={onClickSignup} />
        <Button content="뒤로가기" $buttonColor="blue" onClick={onClickBack} />
      </ButtonWrapper>
    </LoginSignupWrapper>
  );
};

export default Signup;

const InputDetail = styled.p`
  position: absolute;
  top: 2.8rem;
  right: 0;

  color: ${({ theme }) => theme.colors.black};

  font-size: 0.75rem;
`;
