import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('test rendering UI layout', () => {
  test('renders add user form', () => {
    // Arrange
    render(<App />)

    // Act
    // ... nothing

    const linkElement = screen.getByText(/Username/i, { exact: false })

    // Assert
    expect(linkElement).toBeInTheDocument()
  })
})
