import * as React from 'react'
import Card from '../modules/Card'
import { UserContext } from '../context/UserContext'

function UsersList() {
  const userContext = React.useContext(UserContext)
  const { users: userList } = userContext

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
