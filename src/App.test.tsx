import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders add user form', () => {
  render(<App />)
  const linkElement = screen.getByText(/Username/i)
  expect(linkElement).toBeInTheDocument()
})
