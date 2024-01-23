import React from 'react'
import styled from 'styled-components'

type InputType = {
  title: string
  value: string
  textplace?: string
  type?: string
  handleChange: React.Dispatch<React.SetStateAction<string>>
  isButton?: boolean
  btnTitle?: string
  handleButton?: () => void
}

const Input = (props: InputType): JSX.Element => {
  const {
    title,
    value,
    handleChange,
    textplace,
    type,
    isButton,
    btnTitle,
    handleButton,
  } = props

  return (
    <InputContainer>
      <StyledLabel htmlFor={`input-${title}`}>{title}</StyledLabel>
      <div>
        <InputBox
          id={`input-${title}`}
          type={type || 'text'}
          value={value}
          onChange={e => handleChange(e.target.value)}
          placeholder={textplace || 'write here!'}
        />
        {isButton && <InputBtn onClick={handleButton}>{btnTitle}</InputBtn>}
      </div>
    </InputContainer>
  )
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
`

const InputBox = styled.input`
  min-width: 70%;
  padding: 14px;
  font-size: 13px;
  border: 2px solid #efeff2;
  border-radius: 8px;
  &:focus {
    outline: none;
  }
`

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`

const InputBtn = styled.button`
  min-width: 80px;
  /* height: 50px; */
  padding: 15px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  font-size: 13px;
  font-weight: bolder;
  color: #fff;
  background-color: #773dfc;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    min-width: 79px;
  }
`

export default Input
