import styled from 'styled-components';
import { useEffect, useState, useReducer } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import LoginSignupWrapper from '../../commons/LoginSignupWrapper';
import Button from '../../commons/Button';
import Input from '../../commons/Input';

import useGetUserInfo from '../../hooks/useGetUserInfo';
import usePatchChangePw from '../../hooks/usePatchChangePw';

import { MYPAGE_LABEL, CHANGE_PW_LABEL } from '../../assets/constants/constants';

const initialPwState = {
  previousPassword: '',
  newPassword: '',
  newPasswordVerification: '',
  inputVoidErrorMessage: '',
};

const reducerFn = (state, action) => {
  switch (action.type) {
    case '기존 비밀번호':
      return {
        ...state,
        previousPassword: action.value,
      };
    case '새로운 비밀번호':
      return {
        ...state,
        newPassword: action.value,
      };
    case '비밀번호 확인':
      return {
        ...state,
        newPasswordVerification: action.value,
      };
    case 'inputVoidError':
      return { ...state, inputVoidErrorMessage: action.value };
  }
};

const MyPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  const userInfo = useGetUserInfo(userId);
  const { submitChangePw } = usePatchChangePw();

  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [inputVal, dispatch] = useReducer(reducerFn, initialPwState);

  const onChangeHandler = (e) => {
    dispatch({ type: e.target.id, value: e.target.value });
  };

  const onClickValid = () => {
    for (const { label, id } of CHANGE_PW_LABEL) {
      const inputValue = inputVal[id];

      if (!inputValue.trim()) {
        dispatch({ type: 'inputVoidError', value: `${label}(이)가 입력되지 않았습니다.` });
        return;
      }
    }

    submitChangePw(inputVal, userId);
  };

  useEffect(() => {
    inputVal.inputVoidErrorMessage !== '' && alert(inputVal.inputVoidErrorMessage);
  }, [inputVal.inputVoidErrorMessage]);

  const onClickHome = () => {
    navigate('/', { state: { userId } });
  };

  const onClickToggle = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  return (
    <LoginSignupWrapper title="MY PAGE">
      {MYPAGE_LABEL.map((label, idx) => (
        <UserInfoWrapper key={label + idx.toString()}>
          <UserInfoLabel>{label.label}</UserInfoLabel>
          <UserInfoContent>{userInfo[label.content]}</UserInfoContent>
        </UserInfoWrapper>
      ))}
      <Button
        content="홈으로"
        $buttonColor="lightPink"
        $hoverColor="lightPink"
        $fontColor="black"
        $hoverFontColor="black"
        onClick={onClickHome}
      />
      <ToggleTitleWrapper onClick={onClickToggle}>
        <ToggleTitle>비밀번호 변경</ToggleTitle>
        {isToggleOpen ? <FontAwesomeIcon icon={faChevronUp} /> : <FontAwesomeIcon icon={faChevronDown} />}
      </ToggleTitleWrapper>
      <ToggleWrapper $isOpen={isToggleOpen}>
        {CHANGE_PW_LABEL.map((label, idx) => (
          <Input key={label + idx.toString()} label={label.label} onChangeHandler={onChangeHandler} />
        ))}
        <Button content="비밀번호 변경" $buttonColor="blue" $marginTop="3rem" onClick={onClickValid} />
      </ToggleWrapper>
    </LoginSignupWrapper>
  );
};

export default MyPage;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  width: 17rem;
`;

const UserInfoLabel = styled.span`
  color: ${({ theme }) => theme.colors.blue};

  font-size: 1.2rem;
  font-weight: bolder;
`;

const UserInfoContent = styled.span`
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.2rem;
`;

const ToggleTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  cursor: pointer;
`;

const ToggleTitle = styled.h2`
  margin-right: 1rem;

  font-size: 1.2rem;
`;

const ToggleWrapper = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
