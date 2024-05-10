/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components';

const Button = (props) => {
  const { content, onClick } = props;
  return (
    <ButtonWrapper {...props} onClick={onClick}>
      {content}
    </ButtonWrapper>
  );
};

export default Button;

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width = auto;
  height = auto;

  padding: 0.5rem 0.8rem;

  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 0.3rem;

  font-size: 1.2rem;
  cursor: pointer;

  ${({
    theme,
    $marginTop = '',
    $buttonColor = 'skyblue',
    $fontColor = 'white',
    $hoverFontColor = 'white',
    $hoverColor = 'blue',
  }) => css`
    margin-top: ${$marginTop};

    background-color: ${theme.colors[$buttonColor]};
    color: ${theme.colors[$fontColor]};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.blue};

      color: ${theme.colors[$hoverFontColor]};
      background-color: ${theme.colors[$hoverColor]};
    }
  `}
`;
