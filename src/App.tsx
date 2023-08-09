import React from 'react'
import './App.css'
import AddUserForm from './components/AddUserForm'
import UsersList from './components/UsersList'
import { UserContext } from './context/UserContext'

function App() {
  const userContext = React.useContext(UserContext)
  const { users } = userContext

  return (
    <>
      <AddUserForm />
      {users.length > 0 && <UsersList />}
    </>
  )
}

export default App
