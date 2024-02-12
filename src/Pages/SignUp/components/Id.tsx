import React, { useCallback, useEffect, useState } from 'react'
import Input from '../../../Components/Input'
// import { signUpState } from '../../../recoil/atoms/authState'
import { useSignupMutation } from '../../../hooks/mutations/useSignupMutation'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { signUpState, signupInfoState } from '../../../recoil/atoms/authState'

export const Id = (): JSX.Element => {
  const [id, setId] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)

  const setSignupInfo = useSetRecoilState(signupInfoState)
  const isSignupBtnActive = useRecoilValue(signUpState)

  const { postCheckIdMutation } = useSignupMutation({
    setErrMsg,
    setIsDisabled,
  })

  // ID 유효성검사 함수
  const handleValidID = useCallback((typedId: string) => {
    const regex = /^[a-z0-9]{5,10}$/
    const regexNum = /^[0-9]+$/

    if (regexNum.test(typedId) || !regex.test(typedId)) {
      return setErrMsg('영문,숫자를 포함하여 5 ~ 10자 이내로 입력하세요')
      // setIsActive(false)
    }

    return setErrMsg('')
  }, [])

  // id 중복확인 실행 함수
  const handleCheckId = () => {
    const data = { username: id }

    // 중복확인 -> 수정
    if (isDisabled) {
      return setIsDisabled(false)
    }

    // id 중복검사 수행(api요청) 함수
    if (errMsg === '') postCheckIdMutation(data)

    setSignupInfo(prev => ({ ...prev, username: id }))
  }

  useEffect(() => {
    setId('')
    setErrMsg('')
  }, [])

  return (
    <Input
      title="ID"
      value={id}
      textplace={'ID'}
      isButton={true}
      btnTitle={isDisabled ? '수정' : '중복확인'}
      setState={setId}
      isValid={handleValidID}
      handleButton={handleCheckId}
      error={errMsg}
      disabled={isDisabled}
    />
  )
}
