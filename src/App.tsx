import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';
import { Login } from './Pages/Login';

const App = () => {
  return (
    <RecoilRoot>
      <Login />
    </RecoilRoot>
  );
};

export default App;
