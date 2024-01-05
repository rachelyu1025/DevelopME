import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuthQuery } from '../../hooks/mutations/useAuthMutation';

export const Login = (): JSX.Element => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const { postSignInMutation } = useAuthQuery();

  const handleSingIn = () => {
    const data = { username: id, password };

    postSignInMutation(data);
  };

  return (
    <SingInComponent>
      {/* Title */}
      <h1>Sign in</h1>

      {/* ID */}
      <label htmlFor="input-id">ID:</label>
      <input
        id="input-id"
        type="text"
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder="write here!"
      />

      {/* Password */}
      <label htmlFor="input-pw">Password:</label>
      <input
        id="input-pw"
        type="text"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="write here!"
      />

      {/* Button */}
      <button type="button" onClick={handleSingIn}>
        로그인
      </button>
    </SingInComponent>
  );
};

const SingInComponent = styled.div`
  width: '50%';
  height: 50;
`;
