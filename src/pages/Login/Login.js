// This is the login component, it handles showing the login page

import React from 'react'
import LoginLayout from '../../components/Layout/LoginLayout'
import LoginCard from '../../components/Login/LoginCard'

export default function Login() {
  return (
    <LoginLayout>
      <LoginCard/>
    </LoginLayout>
  )
}

