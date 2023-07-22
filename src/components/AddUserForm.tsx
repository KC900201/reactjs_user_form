import * as React from 'react'
import Button from '../modules/Button'

function AddUserForm() {
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
        required
        style={{ width: '-webkit-fill-available' }}
      />
      <label style={{ fontWeight: '700' }}>Age (Years)</label>
      <input
        type="text"
        id="age"
        required
        style={{ width: '-webkit-fill-available' }}
      />
      <Button
        name="Add User"
        buttonFunc={() => {
          alert('Hello')
        }}
      />
    </div>
  )
}

export default AddUserForm
