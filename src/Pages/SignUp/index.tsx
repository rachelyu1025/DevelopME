import React from 'react'
import styled from 'styled-components'
import { SignUpComp } from './SignUpComp'

export const SignUp = (): JSX.Element => {
  return (
    <Container>
      <SignUpComp />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #9c8dbe;
`
