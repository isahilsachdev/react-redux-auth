import React from 'react'
import { auth } from '../firebaseConfig';

const Weather = ({ user }) => {
  console.log('auth 2', auth)

  return (
    <div>
      <h1>Weather</h1>
      <div>
        {user?.email && (
          <h4> User Logged In: {user.email}</h4>
        )}
      </div>
    </div>
  )
}

export default Weather