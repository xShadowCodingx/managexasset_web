// This is the main layout of the application
// This component wraps our content with the re-used components that are on every page

import React from 'react'
import Navigation from '../Navigation/Navigation'

const backgroundTileURL = "url('/Background_Tile.png')"

export default function Layout(props) {
  return (
    <div style={{backgroundImage: backgroundTileURL}}>
      <Navigation />
      {props.children}
    </div>
  )
}

