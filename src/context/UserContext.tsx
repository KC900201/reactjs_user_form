import * as React from 'react'
import { UserType } from '../models/UserType'

const initialUser: UserType = {
  name: '',
  age: '',
}

type UserContextObj = {
  newUser: UserType
  users: UserType[]
  addNewUser: (user: UserType) => void
  updateUser: (user: UserType) => void
  updateName: (nextName: string) => void
  updateAge: (nextAge: string) => void
}

type Props = {
  children?: React.ReactNode
}

export const UserContext = React.createContext<UserContextObj>({
  users: [],
  newUser: initialUser,
  addNewUser: (user: UserType) => {},
  updateUser: (user: UserType) => {},
  updateName: (nextName: string) => {},
  updateAge: (nextAge: string) => {},
})

const UserProvider: React.FC<Props> = (props) => {
  const [users, addUsers] = React.useState<UserType[]>([])
  const [newUser, updateUser] = React.useState<UserType>(initialUser)

  const addNewUser = React.useCallback(
    (user: UserType) => {
      addUsers((prev) => [...prev, user])
    },
    [addUsers]
  )

  const updateName = React.useCallback(
    (nextName: string) => {
      updateUser((prevState) => {
        return { ...prevState, name: nextName }
      })
    },
    [updateUser]
  )

  const updateAge = React.useCallback(
    (nextAge: string) => {
      updateUser((prevState) => {
        return { ...prevState, age: nextAge }
      })
    },
    [updateUser]
  )

  const contextValue: UserContextObj = {
    newUser,
    users,
    addNewUser,
    updateUser,
    updateName,
    updateAge,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
