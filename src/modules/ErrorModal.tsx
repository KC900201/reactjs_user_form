import styled from 'styled-components'

import Card from '../modules/Card'
import Button from './Button'

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
  title?: string
  errorMessage?: string
  disableError: () => void
}

function ErrorModal({ title, errorMessage, disableError }: ErrorModalProps) {
  const ErrorCard = Card

  return (
    <>
      <Backdrop />
      <ErrorCard
        cardStyle={{
          position: 'fixed',
          top: '30vh',
          left: '10%',
          width: '80%',
          zIndex: '100',
          overflow: 'hidden',
        }}
      >
        <header style={{ background: '#4f005f', padding: '1rem' }}>
          <h2 style={{ margin: '0', color: 'white' }}>{title}</h2>
        </header>
        <section style={{ padding: '1rem' }}>
          <p>{errorMessage ?? ''}</p>
        </section>
        <footer
          style={{
            display: 'flex',
            padding: '1rem',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            name="Okay"
            onClick={() => {
              disableError()
            }}
          />
        </footer>
      </ErrorCard>
    </>
  )
}

export default ErrorModal
