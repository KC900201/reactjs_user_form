import * as React from 'react'
import { UserType } from '../App'
import Card from '../modules/Card'

type UsersListProps = {
  userList: UserType[]
}

function UsersList({ userList }: UsersListProps) {
  return (
    <Card>
      <ul style={{ gap: '1rem' }}>
        {userList.map((u, i) => (
          <li
            style={{ padding: '5px' }}
            key={`user_${i}`}
          >{`${u.name} (${u.age})`}</li>
        ))}
      </ul>
    </Card>
  )
}

export default UsersList
