import * as React from 'react'
import styled from 'styled-components'

import Card from '../modules/Card'
import Button from './Button'

const ErrorWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.5rem;
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`

type ErrorModalProps = {
  title: string
  errorMessage?: string
  disableError: (error: boolean) => void
}

function ErrorModal({ title, errorMessage, disableError }: ErrorModalProps) {
  return (
    <>
      <Backdrop />
      <Card>
        <ErrorWrapper>
          <header>
            <h2>{title}</h2>
          </header>
          <text>{errorMessage ?? ''}</text>
          <footer>
            <Button
              name="Okay"
              onClick={() => {
                disableError(true)
              }}
            />
          </footer>
        </ErrorWrapper>
      </Card>
    </>
  )
}

export default ErrorModal
