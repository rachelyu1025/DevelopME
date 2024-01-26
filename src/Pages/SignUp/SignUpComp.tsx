import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { useAuthQuery } from '../../hooks/mutations/useAuthMutation'
import { Id } from './components/Id'
import { NickName } from './components/Nickname'
import { Password } from './components/Password'
import { Email } from './components/Email'

export const SignUpComp = (): JSX.Element => {
  // const { postSignInMutation } = useAuthQuery()

  // 회원가입 수행 함수
  const handleSignup = () => {}

  // id,pw Input 초기화
  const handleResetInputs = () => {}

  useEffect(() => {
    handleResetInputs()
  }, [])

  return (
    <SignUpContainer>
      {/* Title */}
      <Title>회원가입</Title>

      <ContentBox>
        <InputContainer>
          {/* ID */}

          <Id />

          {/* 닉네임 */}
          <NickName />

          {/* Password */}
          <Password />

          {/* Email */}
          <Email />
        </InputContainer>

        {/* Button */}
        <ButtonComp>
          <Button type="button" onClick={handleSignup}>
            인증요청
          </Button>

          <StyledLink to="/signIn">로그인하러 가기</StyledLink>
        </ButtonComp>
      </ContentBox>
    </SignUpContainer>
  )
}

const Title = styled.h1`
  font-weight: bolder;
  font-size: 32px;
`
const SignUpContainer = styled.div`
  min-width: 60vw;
  height: 100vh;
  background-color: #fff;
  padding: 50px;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 70%;
  margin: 0 auto;
`

const InputContainer = styled.div`
  min-width: 250px;
  max-width: 100%;
  margin: 5% 0;
`

const ButtonComp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 0 10px;
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
  padding: 0 10px;

  &:hover {
    color: #773dfc;
  }
`
