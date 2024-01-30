import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { useAuthQuery } from '../../hooks/mutations/useAuthMutation'
import { Id } from './components/Id'
import { NickName } from './components/Nickname'
import { Password } from './components/Password'
import { Email } from './components/Email'
import { useSetRecoilState } from 'recoil'
import { signUpState } from '../../recoil/atoms/authState'

export const SignUpComp = (): JSX.Element => {
  // const { postSignInMutation } = useAuthQuery()
  const setIsActive = useSetRecoilState(signUpState)

  // 회원가입 수행 함수
  const handleSignup = () => {
    setIsActive(true)
  }

  // id,pw Input 초기화
  const handleResetInputs = () => {}

  useEffect(() => {
    handleResetInputs()
  }, [])

  return (
    <SignUpContainer>
      <ContentBox>
        {/* Title */}
        <Title>회원가입</Title>

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
        <ButtonBox>
          <Button type="button" onClick={handleSignup}>
            인증요청
          </Button>

          <StyledLink to="/signIn">로그인하러 가기</StyledLink>
        </ButtonBox>
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
  padding: 50px 10%;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  min-width: 50%;
  margin: 0 auto;
  padding: 0 10px;
  background-color: #fff;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5% 0;
`

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  background-color: #773dfc;
  color: #fff;
  padding: 18px 28px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    padding: 18px 29px;
  }
`

const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: #a2a3b9;
  display: block;
  margin-top: 10px;
  margin-right: 10px;

  &:hover {
    color: #773dfc;
  }
`
