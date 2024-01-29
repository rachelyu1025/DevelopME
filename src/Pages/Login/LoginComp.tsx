import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useAuthQuery } from '../../hooks/mutations/useAuthMutation'
import Input from '../../Components/Input'

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
        <Title>로그인</Title>

        <InputContainer>
          {/* ID */}
          <Input title="ID" value={id} handleChange={setId} />

          {/* Password */}
          <div>
            <Input
              title="Password"
              value={password}
              handleChange={setPassword}
            />

            {/* eslint-disable  */}
            <StyledLink to="#">비밀번호 재설정</StyledLink>
          </div>
        </InputContainer>

        {/* Button */}
        <ButtonBox>
          <Button type="button" onClick={handleSingIn}>
            로그인
          </Button>
          {/* eslint-disable  */}
          <StyledLink to="/signUp">회원가입하러 가기</StyledLink>
        </ButtonBox>

        <OauthContainer>
          <Text>Login with</Text>
          <OauthBox>
            <button>G</button>
            <button>N</button>
            <button>K</button>
          </OauthBox>
        </OauthContainer>
      </ContentBox>
    </SignInContainer>
  )
}

const Title = styled.h1`
  font-weight: bolder;
  font-size: 36px;
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
  height: 80%;
  padding: 50px;
  margin: 10% 0;
`

const InputContainer = styled.div`
  min-width: 250px;
  max-width: 80%;
  margin: 10% 0;
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 99px;
  width: 150px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  background-color: #773dfc;
  color: #fff;
  margin-bottom: 10px;

  &:hover {
    opacity: 0.7;
  }
  &:active {
    width: 149px;
  }
`

const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #a2a3b9;
  display: block;
  padding-left: 10px;

  &:hover {
    color: #773dfc;
  }
`

const OauthContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const OauthBox = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin-right: 10px;
    border: 0;
    border-radius: 50%;
    padding: 12px 15px;
    background-color: pink;
  }
`
const Text = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #6b6b6b;
  margin-right: 10px;
`
