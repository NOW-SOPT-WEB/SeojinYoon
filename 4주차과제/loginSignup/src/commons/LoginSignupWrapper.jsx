/* eslint-disable react/prop-types */
import styled from 'styled-components';

const LoginSignupWrapper = (props) => {
  const { title, children } = props;
  return (
    <LoginSignupWrp>
      <Title>{title}</Title>
      {children}
    </LoginSignupWrp>
  );
};

export default LoginSignupWrapper;

const LoginSignupWrp = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2.7rem;

  width: 35rem;

  padding: 2.5rem 1rem 4rem 1rem;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;

  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.lightSkyblue};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.7rem;
  font-weight: bolder;
`;
