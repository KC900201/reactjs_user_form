import * as React from 'react'
import { UserType } from '../App'

type UsersListProps = {
  userList: UserType[]
}

function UsersList({ userList }: UsersListProps) {
  console.table(userList)
  return (
    <div
      style={{
        width: '500px',
        margin: '1rem auto',
        padding: '1rem',
        borderRadius: '10px',
      }}
    >
      {userList.map((u, i) => (
        <label key={`user_${i}`}>{`${u.name} (${u.age})`}</label>
      ))}
    </div>
  )
}

export default UsersList
