import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'

export const Password = (): JSX.Element => {
  const [password, setPassword] = useState('')
  const [chkPswd, setChkPswd] = useState('') // 비밀번호 확인
  const [pwErrMsg, setPwErrMsg] = useState('') // 비밀번호 입력 input error message
  const [chkErrMsg, setChkErrMsg] = useState('') // 비밀번호 확인 input error message

  // 메일 인증요청 버튼 클릭 시
  // password regex 확인
  // chkPassword 값이 password 와 같은지 비교

  const handlePassword = () => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/

    if (!regex.test(password))
      return setPwErrMsg(
        '영문,숫자,특수문자를 포함하여 8 ~ 20자 이내로 입력하세요'
      )

    // api요청 (error msg)
    // 성공 -> input disabled & 버튼 title 수정
    // setErrMsg 에 에러메세지 담기

    return setPwErrMsg('')
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
        value={password}
        handleChange={setPassword}
        textplace={'password'}
        error={pwErrMsg}
      />
      <Input
        title="Password 확인"
        value={chkPswd}
        handleChange={setChkPswd}
        textplace={'password'}
        error={chkErrMsg}
      />
    </div>
  )
}
