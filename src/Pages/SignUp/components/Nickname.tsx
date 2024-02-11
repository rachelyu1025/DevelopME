import React, { useCallback, useEffect, useState } from 'react'
import Input from '../../../Components/Input'
// import { useRecoilState } from 'recoil'
// import { signUpState } from '../../../recoil/atoms/authState'
import { useSignupMutation } from '../../../hooks/mutations/useSignupMutation'

export const NickName = (): JSX.Element => {
  const [nickName, setNickName] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  // const [isActive, setIsActive] = useRecoilState(signUpState)

  const { postCheckNNameMutation } = useSignupMutation({
    setErrMsg,
    setIsDisabled,
  })

  const handleValidName = useCallback((typedName: string) => {
    const regex = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]+$/ //한글,영어,숫자만 허용

    if (!regex.test(typedName)) {
      return setErrMsg('한글/영문/숫자를 이용한 닉네임을 입력해주세요.')
      // setIsActive(false)
    }

    return setErrMsg('')
  }, [])

  // 닉네임 중복확인 실행 함수
  const handleCheckNickName = () => {
    const data = { nickname: nickName }

    // 중복확인 -> 수정
    if (isDisabled) {
      return setIsDisabled(false)
    }

    // id 중복검사 수행(api요청) 함수
    if (errMsg === '') postCheckNNameMutation(data)
  }

  useEffect(() => {
    setNickName('')
    setErrMsg('')
  }, [])

  return (
    <Input
      title="닉네임"
      value={nickName}
      textplace={'NickName'}
      isButton={true}
      btnTitle={isDisabled ? '수정' : '중복확인'}
      setState={setNickName}
      isValid={handleValidName}
      handleButton={handleCheckNickName}
      error={errMsg}
      disabled={isDisabled}
    />
  )
}
