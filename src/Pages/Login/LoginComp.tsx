import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuthQuery } from '../../hooks/mutations/useAuthMutation'
import TextInput from '../../Components/TextInput'

export const LoginComp = (): JSX.Element => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const { postSignInMutation } = useAuthQuery()

  // login 수행 함수
  const handleSingIn = () => {
    const data = { username: id, password }

    postSignInMutation(data)

    handleResetInputs()
  }

  // id,pw Input 초기화
  const handleResetInputs = () => {
    setId('')
    setPassword('')
  }

  return (
    <SignInContainer>
      <ContentBox>
        {/* Title */}
        <Title>Sign In</Title>

        <InputContainer>
          {/* ID */}
          <TextInput title="ID" value={id} handleChange={setId} />

          {/* Password */}
          <div>
            <TextInput
              title="Password"
              value={password}
              handleChange={setPassword}
            />

            {/* eslint-disable  */}
            <StyledLink to="#">비밀번호 재설정</StyledLink>
          </div>
        </InputContainer>

        {/* Button */}
        <ButtonComp>
          <Button type="button" onClick={handleSingIn}>
            로그인
          </Button>
          {/* eslint-disable  */}
          <StyledLink to="#">회원가입하러 가기</StyledLink>
        </ButtonComp>
      </ContentBox>
    </SignInContainer>
  )
}

const Title = styled.h1`
  display: block;
  font-weight: bolder;
  font-size: 48px;
  margin-bottom: 50px;
`
const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50vw;
  height: 100vh;
  background-color: #fff;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
  height: 70%;
`

const InputContainer = styled.div`
  width: 90%;
  margin-bottom: 30px;
`

const ButtonComp = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 99px;
  width: 200px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #773dfc;
  color: #fff;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    width: 149px;
  }
`

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #a2a3b9;
  display: block;
  padding-left: 10px;

  &:hover {
    color: #773dfc;
  }
`
