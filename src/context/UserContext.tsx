import * as React from 'react'
import { UserType } from '../models/UserType'

type UserContextObj = {
  users: UserType[]
  addNewUser: (user: UserType) => void
}

type Props = {
  children?: React.ReactNode
}

export const UserContext = React.createContext<UserContextObj>({
  users: [],
  addNewUser: (user: UserType) => {},
})

const UserProvider: React.FC<Props> = (props) => {
  const [users, addUsers] = React.useState<UserType[]>([])

  const addNewUser = React.useCallback(
    (user: UserType) => {
      addUsers((prev) => [...prev, user])
    },
    [addUsers]
  )

  const contextValue: UserContextObj = {
    users,
    addNewUser,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
