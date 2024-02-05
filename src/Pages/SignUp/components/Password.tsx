import React, { useCallback, useEffect, useState } from 'react'
import Input from '../../../Components/Input'

export const Password = (): JSX.Element => {
  const [password, setPassword] = useState('')
  const [chkPswd, setChkPswd] = useState('') // 비밀번호 확인
  const [pwErrMsg, setPwErrMsg] = useState('') // 비밀번호 입력 input error message
  const [chkErrMsg, setChkErrMsg] = useState('') // 비밀번호 확인 input error message

  // password 유효성검사 함수
  const handleValidPw = useCallback((typedPw: string) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

    if (!regex.test(typedPw))
      return setPwErrMsg(
        '영문,숫자,특수문자를 포함하여 8 ~ 20자 이내로 입력하세요'
      )

    return setPwErrMsg('')
  }, [])

  const handleCheckPassword = (typedPw: string) => {
    console.log(typedPw, password, typedPw !== password)
    if (typedPw !== password) {
      return setChkErrMsg('비밀번호가 일치하지 않습니다.')
    }

    return setChkErrMsg('')
  }

  useEffect(() => {
    setPassword('')
    setChkPswd('')
    setPwErrMsg('')
    setChkErrMsg('')
  }, [])

  return (
    <div>
      <Input
        title="Password"
        type="password"
        value={password}
        setState={setPassword}
        isValid={handleValidPw}
        textplace={'password'}
        error={pwErrMsg}
      />

      <Input
        title="Password 확인"
        type="password"
        value={chkPswd}
        setState={setChkPswd}
        isValid={handleCheckPassword}
        textplace={'password'}
        error={chkErrMsg}
      />
    </div>
  )
}
