import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'

export const Email = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const handleChkEmail = () => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

    if (!email.length && !regex.test(email))
      return setErrMsg('이메일 형식에 맞게 입력해주세요.')

    // api요청 (error msg)
    // 성공 -> input disabled & 버튼 title 수정
    // setErrMsg 에 에러메세지 담기

    return setErrMsg('')
  }

  useEffect(() => {
    setEmail('')
    setErrMsg('')
  }, [])

  return (
    <Input
      title="Email"
      type="email"
      value={email}
      handleChange={setEmail}
      textplace={'email'}
      isButton={true}
      btnTitle="중복확인"
      handleButton={handleChkEmail}
      error={errMsg}
    />
  )
}
