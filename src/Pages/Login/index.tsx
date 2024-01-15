import React from 'react'
import { LoginComp } from './LoginComp'
import styled from 'styled-components'

export const Login = (): JSX.Element => {
  return (
    <Container>
      <LoginComp />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #9c8dbe;
`
