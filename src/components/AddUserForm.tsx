import * as React from 'react'
import styled from 'styled-components'

import Card from '../modules/Card'
import Button from '../modules/Button'
import { UserType } from '../App'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
`

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
    <Card>
      <FormWrapper
        onSubmit={(event: React.FormEvent) => {
          event.preventDefault()
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
          pattern="/^[0-9\b]+$/"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            updateAge(
              !isNaN(parseInt(event.target.value))
                ? parseInt(event.target.value)
                : 0
            )
          }}
          style={{ width: '-webkit-fill-available' }}
        />
        <Button
          name="Add User"
          onClick={() => {
            addUser(newUser)
          }}
        />
      </FormWrapper>
    </Card>
  )
}

export default AddUserForm
