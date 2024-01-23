import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
// import { useAuthQuery } from '../../hooks/mutations/useAuthMutation'
import TextInput from '../../Components/Input'

export const SignUpComp = (): JSX.Element => {
  const [id, setId] = useState('')
  const [nickName, setNickName] = useState('')
  const [password, setPassword] = useState('')
  const [chkPswd, setChkPswd] = useState('') // 비밀번호 확인 input 값
  const [email, setEmail] = useState('')

  // const { postSignInMutation } = useAuthQuery()

  // 회원가입 수행 함수
  const handleSignup = () => {}

  // id,pw Input 초기화
  const handleResetInputs = () => {
    setId('')
    setNickName('')
    setPassword('')
    setChkPswd('')
    setEmail('')
  }

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

          <TextInput
            title="ID"
            value={id}
            handleChange={setId}
            textplace={'ID'}
            isButton={true}
            btnTitle="중복확인"
            handleButton={() => {}}
          />

          <TextInput
            title="닉네임"
            value={nickName}
            handleChange={setNickName}
            textplace={'NickName'}
            isButton={true}
            btnTitle="중복확인"
            handleButton={() => {}}
          />
          {/* Password */}
          <div>
            <TextInput
              title="Password"
              value={password}
              handleChange={setPassword}
              textplace={'password'}
            />
            <TextInput
              title="Password 확인"
              value={chkPswd}
              handleChange={setChkPswd}
              textplace={'password'}
            />
          </div>

          <TextInput
            title="Email"
            type="email"
            value={email}
            handleChange={setEmail}
            textplace={'email'}
          />
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 60vw;
  background-color: #fff;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px;
`

const InputContainer = styled.div`
  min-width: 250px;
  max-width: 100%;
  margin: 5% 0;
`

const ButtonComp = styled.div`
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
