/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Input = (props) => {
  const { label, children, onChangeHandler } = props;

  return (
    <InputWrapper>
      <InputContainer>
        <InputLabel>{label}</InputLabel>
        <StyledInput id={label} onChange={onChangeHandler} />
      </InputContainer>
      {children}
    </InputWrapper>
  );
};

export default Input;

const InputWrapper = styled.div`
  position: relative;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  width: 28rem;
`;

const InputLabel = styled.label`
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.2rem;
  font-weight: bolder;
`;

const StyledInput = styled.input`
  width: 17rem;

  padding: 0.5rem 0.7rem;

  border: none;
  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.colors.white};

  font-size: 1.1rem;
  font-family: ${({ theme }) => theme.font.fontFamily};
`;
