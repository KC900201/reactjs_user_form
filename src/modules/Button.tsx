import * as React from 'react'

type ButtonProps = {
  name: string
  buttonFunc: () => void
}

function Button({ name, buttonFunc }: ButtonProps) {
  return (
    <button
      onClick={buttonFunc}
      style={{ width: 'fit-content', maxWidth: '500px' }}
    >
      {name}
    </button>
  )
}

export default Button
