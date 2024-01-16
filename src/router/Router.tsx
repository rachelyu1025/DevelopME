import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from '../App'
import { Login } from '../Pages/Login'
import { SignUp } from '../Pages/SignUp'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signIn" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      {/* <Route path="/resetPw" element={< />} /> */}
    </Routes>
  )
}

export default Router
