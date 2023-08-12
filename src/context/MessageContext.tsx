import * as React from 'react'

interface ErrorMessageInterface {
  title: string
  message: string
}

type MessageContextObj = {
  errorMessage?: ErrorMessageInterface | null
  setErrorMessage: (message: ErrorMessageInterface | null) => void
}

type Props = {
  children?: React.ReactNode
}

export const MessageContext = React.createContext<MessageContextObj>({
  errorMessage: null,
  setErrorMessage: (message: ErrorMessageInterface | null) => {},
})

const MessageProvider: React.FC<Props> = (props) => {
  const [errorMessage, setErrorMessage] =
    React.useState<ErrorMessageInterface | null>()

  const contextValue: MessageContextObj = {
    errorMessage,
    setErrorMessage,
  }

  return (
    <MessageContext.Provider value={contextValue}>
      {props.children}
    </MessageContext.Provider>
  )
}

export default MessageProvider
