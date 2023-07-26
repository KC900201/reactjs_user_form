import * as React from 'react'
import { UserType } from '../App'
import Card from '../modules/Card'

type UsersListProps = {
  userList: UserType[]
}

function UsersList({ userList }: UsersListProps) {
  return (
    <Card>
      <ul style={{ gap: '1rem', listStyle: 'none', padding: '1rem' }}>
        {userList.map((u, i) => (
          <li
            style={{
              padding: '0.5rem',
              margin: '0.5rem 0',
              border: '1px solid #ccc',
            }}
            key={`user_${i}`}
          >{`${u.name} (${u.age})`}</li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
