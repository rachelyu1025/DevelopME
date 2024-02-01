import React, { useCallback, useEffect, useState } from 'react'
import Input from '../../../Components/Input'
// import { useRecoilState } from 'recoil'
// import { signUpState } from '../../../recoil/atoms/authState'
import { useSignupMutation } from '../../../hooks/mutations/useSignupMutation'

export const Id = (): JSX.Element => {
  const [id, setId] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  // const [isActive, setIsActive] = useRecoilState(signUpState)

  const { postCheckIdMutation } = useSignupMutation({
    setErrMsg,
    setIsDisabled,
  })

  // ID 유효성검사 함수
  const handleValidID = useCallback((): boolean => {
    const regex = /^[a-z0-9]{5,10}$/
    const regexNum = /^[0-9]+$/

    if (regexNum.test(id) || !regex.test(id)) {
      setErrMsg('영문,숫자를 포함하여 5 ~ 10자 이내로 입력하세요')
      // setIsActive(false)
      return false
    }

    setErrMsg('')
    return true
  }, [id])

  // id 중복확인 실행 함수
  const handleCheckId = () => {
    const data = { username: id }

    // 중복확인 -> 수정
    if (isDisabled) {
      return setIsDisabled(false)
    }

    // 유효성검사 함수 실행
    const isValidID = handleValidID()

    // id 중복검사 수행(api요청) 함수
    if (isValidID) postCheckIdMutation(data)
    else return
    // 성공 -> input disabled & 버튼 title 수정
    // setErrMsg 에 에러메세지 담기
  }

  useEffect(() => {
    if (!isDisabled) {
      setId('')
      setErrMsg('')
    }
  }, [isDisabled])

  return (
    <Input
      title="ID"
      value={id}
      textplace={'ID'}
      isButton={true}
      btnTitle={isDisabled ? '수정' : '중복확인'}
      setState={setId}
      handleButton={handleCheckId}
      error={errMsg}
      disabled={isDisabled}
    />
  )
}
