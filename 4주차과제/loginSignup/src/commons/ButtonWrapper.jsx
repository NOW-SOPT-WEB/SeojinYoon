/* eslint-disable react/prop-types */
import styled from 'styled-components';

const ButtonWrapper = (props) => {
  const { children } = props;
  return <BtnWrapper>{children}</BtnWrapper>;
};

export default ButtonWrapper;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
