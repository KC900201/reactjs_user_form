import * as React from 'react'
import { UserType } from '../App'

type UsersListProps = {
  userList: UserType[]
}

function UsersList({ userList }: UsersListProps) {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '500px',
        margin: '1rem auto',
        padding: '1rem',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'baseline',
      }}
    >
      {userList.map((u, i) => (
        <label key={`user_${i}`}>{`${u.name} (${u.age})`}</label>
      ))}
    </div>
  )
}

export default UsersList
