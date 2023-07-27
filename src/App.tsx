import React from 'react'
import './App.css'
import AddUserForm from './components/AddUserForm'
import UsersList from './components/UsersList'
import ErrorModal from './modules/ErrorModal'

export interface UserType {
  name?: string
  age?: string
}

export interface ErrorMessageInterface {
  title: string
  message: string
}

function App() {
  const [users, addUsers] = React.useState<UserType[]>([])
  const [error, setError] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState<ErrorMessageInterface>(
    {
      title: '',
      message: '',
    }
  )

  const addNewUser = React.useCallback(
    (user: UserType) => {
      addUsers((prev) => [...prev, user])
    },
    [addUsers]
  )

  const triggerError = React.useCallback(
    (error: boolean) => {
      setError(error)
    },
    [setError]
  )

  return (
    <>
      <AddUserForm
        addUser={addNewUser}
        setError={triggerError}
        setErrorMessage={setErrorMessage}
      />
      {users.length > 0 && <UsersList userList={users} />}
      {error && (
        <ErrorModal
          title={errorMessage.title}
          errorMessage={errorMessage.message}
          disableError={() => setError}
        />
      )}
    </>
  )
}

export default App
