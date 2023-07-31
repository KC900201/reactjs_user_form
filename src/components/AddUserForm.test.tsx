import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AddUserForm from './AddUserForm'

describe('testing rendering without crash', () => {
  test('render AddUserForm component', () => {
    const addUserBtn = jest.fn()

    render(<AddUserForm addUser={addUserBtn} />)

    expect(screen.getByText('Username')).toBeInTheDocument()
  })

  // User interaction testing
  test('render form after clicking button', () => {
    // Arrange
    const addUserHandler = jest.fn()

    render(<AddUserForm addUser={addUserHandler} />)

    // Act
    const addUserButton = screen.getByRole('button')
    userEvent.click(addUserButton)

    // Assert
    expect(screen.getByText(/Invalid name/i)).toBeInTheDocument()
  })

  // WIP (07/31/2023)
  test('render form after typing valid input and clicking button', () => {})
})
