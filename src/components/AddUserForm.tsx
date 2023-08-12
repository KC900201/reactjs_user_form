import * as React from 'react'
import styled from 'styled-components'

import Card from '../modules/Card'
import Button from '../modules/Button'
import ErrorModal from '../modules/ErrorModal'
import { UserType } from '../models/UserType'
import { UserContext } from '../context/UserContext'

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
`

interface ErrorMessageInterface {
  title: string
  message: string
}

const initialUser: UserType = {
  name: '',
  age: '',
}

function AddUserForm() {
  const { newUser, updateAge, updateName, updateUser, addNewUser } =
    React.useContext(UserContext)

  const [errorMessage, setErrorMessage] =
    React.useState<ErrorMessageInterface | null>()

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

      addNewUser(newUser)
      updateUser(initialUser)
    },
    [newUser, addNewUser, updateUser]
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
