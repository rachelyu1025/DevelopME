import React, { useEffect, useState } from 'react'
import Input from '../../../Components/Input'

export const Id = (): JSX.Element => {
  const [id, setId] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const handleCheckID = () => {
    const regex = /^[a-zA-Z0-9]{5,10}$/
    const regexNum = /^[0-9]+$/

    if (regexNum.test(id) || !regex.test(id))
      return setErrMsg('영문,숫자를 포함하여 5 ~ 10자 이내로 입력하세요')

    // api요청 (error msg)
    // 성공 -> input disabled & 버튼 title 수정
    // setErrMsg 에 에러메세지 담기

    return setErrMsg('')
  }

  useEffect(() => {
    setId('')
    setErrMsg('')
  }, [])

  return (
    <Input
      title="ID"
      value={id}
      handleChange={setId}
      textplace={'ID'}
      isButton={true}
      btnTitle="중복확인"
      handleButton={handleCheckID}
      error={errMsg}
    />
  )
}
