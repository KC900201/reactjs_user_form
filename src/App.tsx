import React from 'react'
import './App.css'
import AddUserForm from './components/AddUserForm'
import UsersList from './components/UsersList'
import { UserType } from './models/UserType'

function App() {
  const [users, addUsers] = React.useState<UserType[]>([])

  const addNewUser = React.useCallback(
    (user: UserType) => {
      addUsers((prev) => [...prev, user])
    },
    [addUsers]
  )

  return (
    <>
      <AddUserForm addUser={addNewUser} />
      {users.length > 0 && <UsersList userList={users} />}
    </>
  )
}

export default App
