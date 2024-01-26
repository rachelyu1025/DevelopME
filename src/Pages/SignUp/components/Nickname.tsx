import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'

export const NickName = (): JSX.Element => {
  const [nickName, setNickName] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const handleChkNickName = () => {
    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/ //한글,영어,숫자만 허용

    if (!regex.test(nickName))
      return setErrMsg('한글/영문/숫자를 이용한 닉네임을 입력해주세요.')

    // api요청 (error msg)
    // 성공 -> input disabled & 버튼 title 수정
    // setErrMsg 에 에러메세지 담기

    return setErrMsg('')
  }

  useEffect(() => {
    setNickName('')
    setErrMsg('')
  }, [])

  return (
    <Input
      title="닉네임"
      value={nickName}
      handleChange={setNickName}
      textplace={'NickName'}
      isButton={true}
      btnTitle="중복확인"
      handleButton={handleChkNickName}
      error={errMsg}
    />
  )
}
