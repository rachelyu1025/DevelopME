import React, { useCallback, useEffect, useState } from 'react'
import Input from '../../../Components/Input'
import { useSignupMutation } from '../../../hooks/mutations/useSignupMutation'

export const Email = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const { postCheckEmailMutation } = useSignupMutation({
    setErrMsg,
    setIsDisabled,
  })

  // email 유효성검사 함수
  const handleValidEmail = useCallback((typedEmail: string) => {
    const regex = /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-za-z0-9-]+/

    if (!regex.test(typedEmail)) {
      return setErrMsg('이메일 형식에 맞게 입력해주세요.')
    }

    return setErrMsg('')
  }, [])

  // email 중복확인 실행 함수
  const handleCheckEmail = () => {
    const data = { email }

    // 중복확인 -> 수정
    if (isDisabled) {
      return setIsDisabled(false)
    }

    // id 중복검사 수행(api요청) 함수
    if (errMsg === '') postCheckEmailMutation(data)
  }

  useEffect(() => {
    // 초기화
    setEmail('')
    setErrMsg('')
  }, [])

  return (
    <Input
      title="Email"
      type="email"
      value={email}
      textplace={'email'}
      isButton={true}
      btnTitle={isDisabled ? '수정' : '중복확인'}
      setState={setEmail}
      isValid={handleValidEmail}
      handleButton={handleCheckEmail}
      error={errMsg}
      disabled={isDisabled}
    />
  )
}
