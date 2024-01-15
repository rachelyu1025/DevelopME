import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useAuthQuery } from '../../hooks/mutations/useAuthMutation';
import TextInput from '../../Components/TextInput';

export const Login = (): JSX.Element => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const { postSignInMutation } = useAuthQuery();

  // login 수행 함수
  const handleSingIn = () => {
    const data = { username: id, password };

    postSignInMutation(data);

    handleResetInputs();
  };

  // id,pw Input 초기화
  const handleResetInputs = () => {
    setId('');
    setPassword('');
  };

  return (
    <SignInContainer>
      <ContentBox>
        {/* Title */}
        <h1>Sign In</h1>

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
            <Link to="#">비밀번호 재설정</Link>
          </div>
        </InputContainer>

        {/* Button */}
        <ButtonComp>
          <Button type="button" onClick={handleSingIn}>
            로그인
          </Button>
          {/* eslint-disable  */}
          <Link to="#">회원가입</Link>
        </ButtonComp>
      </ContentBox>
    </SignInContainer>
  );
};

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50vw;
  padding: 0px 10px;
  border: 3px solid black;
`;

const ContentBox = styled.div`
  border: 2px solid green;
  width: 100%;
`;

const InputContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  border: 0;
  border-radius: 99px;
  width: 150px;
  height: 50px;
  font-size: 16px;
  font-weight: bold;
  background-color: #773dfc;
  color: #fff;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    width: 149px;
  }
`;

const ButtonComp = styled.div`
  display: flex;
  flex-direction: column;
`;
