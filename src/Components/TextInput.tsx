import React from 'react';
import styled from 'styled-components';

type TextInputType = {
  title: string;
  value: string;
  handleChange: React.Dispatch<React.SetStateAction<string>>;
};

const TextInput = (props: TextInputType): JSX.Element => {
  const { title, value, handleChange } = props;

  return (
    <InputContainer>
      <StyledLabel htmlFor={`input-${title}`}>{title}</StyledLabel>
      <InputBox
        id={`input-${title}`}
        type="text"
        value={value}
        onChange={e => handleChange(e.target.value)}
        placeholder="write here!"
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;

const InputBox = styled.input`
  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
  border: 2px solid #efeff2;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

const StyledLabel = styled.label`
  font-size: 16px;
  font-weight: normal;
`;

export default TextInput;
