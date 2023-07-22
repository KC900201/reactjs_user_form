import * as React from 'react'
import Button from '../modules/Button'
import { UserType } from '../App'

type AddUserProps = {
  addUser: (nextUser: UserType) => void
}

function AddUserForm({ addUser }: AddUserProps) {
  const [newUser, updateUser] = React.useState<UserType>({
    name: undefined,
    age: undefined,
  })

  const updateName = (nextName: string) => {
    updateUser((prevState) => {
      return { ...prevState, name: nextName }
    })
  }

  const updateAge = (nextAge: number) => {
    updateUser((prevState) => {
      return { ...prevState, age: nextAge }
    })
  }

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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          updateName(event.target.value)
        }}
      />
      <label style={{ fontWeight: '700' }}>Age (Years)</label>
      <input
        type="text"
        id="age"
        required
        value={newUser.age}
        pattern="[0-9.]+"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          updateAge(parseInt(event.target.value))
        }}
        style={{ width: '-webkit-fill-available' }}
      />
      <Button
        name="Add User"
        onClick={() => {
          addUser(newUser)
        }}
      />
    </div>
  )
}

export default AddUserForm
