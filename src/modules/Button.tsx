import * as React from 'react'

type ButtonProps = {
  name: string
  onClick: () => void
}

function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{ width: 'fit-content', maxWidth: '500px' }}
    >
      {name}
    </button>
  )
}

export default Button
