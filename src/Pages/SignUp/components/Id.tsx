import React, { useCallback, useEffect, useState } from 'react'
import Input from '../../../Components/Input'
import { useRecoilState } from 'recoil'
import { signUpState } from '../../../recoil/atoms/authState'

export const Id = (): JSX.Element => {
  const [id, setId] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [isDisabled, setIsDisabled] = useState(false)
  const [isActive, setIsActive] = useRecoilState(signUpState)

  const handleCheckID = useCallback(() => {
    const regex = /^[a-zA-Z0-9]{5,10}$/
    const regexNum = /^[0-9]+$/

    if (isDisabled) return

    if (regexNum.test(id) || !regex.test(id)) {
      setErrMsg('영문,숫자를 포함하여 5 ~ 10자 이내로 입력하세요')
      setIsActive(false)
      return
    }

    // api요청 (error msg)
    // 성공 -> input disabled & 버튼 title 수정
    // setErrMsg 에 에러메세지 담기

    setErrMsg('')
    setIsDisabled(true)
    return
  }, [id, isDisabled, setIsActive])

  useEffect(() => {
    setId('')
    setErrMsg('')
  }, [])

  useEffect(() => {
    if (isActive) {
      handleCheckID()
      return setIsActive(() => false)
    }
  }, [isActive, setIsActive, handleCheckID])

  return (
    <Input
      title="ID"
      value={id}
      setState={setId}
      textplace={'ID'}
      isButton={true}
      btnTitle="중복확인"
      handleButton={handleCheckID}
      error={errMsg}
      disabled={isDisabled}
    />
  )
}
