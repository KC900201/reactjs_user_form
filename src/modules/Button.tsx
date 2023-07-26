import * as React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{ type?: string }>(
  (props) => `
  font: inherit;
  border: 1px solid #4f005f;
  border-radius: 5px;
  background: #4f005f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  width: fit-content;
  max-width: 500px;
  type: ${props.type || 'button'};
  &:hover,
  &:active {
    background: #741188;
    border-color: #741188;
  }
  &:focus {
    outline: none;
  }
`
)

type ButtonProps = {
  name: string
  type?: string
  onClick: () => void
}

function Button({ name, type, onClick }: ButtonProps) {
  return (
    <StyledButton type={type} onClick={onClick}>
      {name}
    </StyledButton>
  )
}

export default Button
