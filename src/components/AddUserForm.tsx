import * as React from 'react'
import Button from '../modules/Button'
import { UserType } from '../App'

type AddUserProps = {
  addUser: (nextUser: UserType) => void
}

function AddUserForm({ addUser }: AddUserProps) {
  const newUser: UserType = { name: undefined, age: undefined }

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        width: '500px',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        margin: '1rem auto',
        padding: '1rem',
        borderRadius: '10px',
      }}
    >
      <label style={{ fontWeight: '700' }}>Username</label>
      <input
        type="text"
        id="name"
        value={newUser.name}
        required
        style={{ width: '-webkit-fill-available' }}
      />
      <label style={{ fontWeight: '700' }}>Age (Years)</label>
      <input
        type="text"
        id="age"
        required
        value={newUser.age}
        style={{ width: '-webkit-fill-available' }}
      />
      <Button
        name="Add User"
        onClick={() => {
          console.log('new user: ', newUser)
          addUser(newUser)
        }}
      />
    </div>
  )
}

export default AddUserForm
