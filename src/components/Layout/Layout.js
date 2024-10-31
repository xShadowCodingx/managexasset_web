// This is the main layout of the application
// This component wraps our content with the re-used components that are on every page

import React from 'react'

export default function Layout(props) {
  return (
    <div>
      {props.children}
    </div>
  )
}

