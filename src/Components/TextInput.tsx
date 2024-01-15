import React from 'react'
import styled from 'styled-components'

type TextInputType = {
  title: string
  value: string
  handleChange: React.Dispatch<React.SetStateAction<string>>
}

const TextInput = (props: TextInputType): JSX.Element => {
  const { title, value, handleChange } = props

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
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const InputBox = styled.input`
  padding: 16px;
  margin: 10px 0;
  font-size: 16px;
  border: 3px solid #efeff2;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`

const StyledLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`

export default TextInput
