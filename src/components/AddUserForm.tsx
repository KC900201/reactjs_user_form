import * as React from 'react'
import styled from 'styled-components'

import Card from '../modules/Card'
import Button from '../modules/Button'
import ErrorModal from '../modules/ErrorModal'
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

interface ErrorMessageInterface {
  title: string
  message: string
}

const initialUser: UserType = {
  name: '',
  age: '',
}

function AddUserForm({ addUser }: AddUserProps) {
  const [newUser, updateUser] = React.useState<UserType>(initialUser)
  const [errorMessage, setErrorMessage] =
    React.useState<ErrorMessageInterface | null>()

  const updateName = React.useCallback(
    (nextName: string) => {
      updateUser((prevState) => {
        return { ...prevState, name: nextName }
      })
    },
    [updateUser]
  )

  const updateAge = (nextAge?: string) => {
    updateUser((prevState) => {
      return { ...prevState, age: nextAge }
    })
  }

  const onSubmitForm = React.useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault()

      if (!newUser.name || newUser.name.trim().length <= 0) {
        setErrorMessage({
          title: 'Invalid name',
          message: 'Please input name',
        })
        return
      }
      // Check the input age by converting to integer
      if (!newUser.age || +newUser.age <= 0) {
        setErrorMessage({
          title: 'Invalid age',
          message: 'Please input proper age value',
        })

        return
      }

      addUser(newUser)
      updateUser(initialUser)
    },
    [newUser, addUser, setErrorMessage]
  )

  const errorHandler = () => {
    setErrorMessage(null)
  }

  return (
    <>
      {errorMessage && (
        <ErrorModal
          title={errorMessage?.title}
          errorMessage={errorMessage?.message}
          disableError={errorHandler}
        />
      )}
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
            type="number"
            id="age"
            required
            value={newUser.age}
            pattern="/^[0-9\b]+$/"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              updateAge(event.target.value.toString().trim())
            }}
            style={{ width: '-webkit-fill-available' }}
          />
          <Button name="Add User" onClick={onSubmitForm} />
        </FormWrapper>
      </Card>
    </>
  )
}

export default AddUserForm
