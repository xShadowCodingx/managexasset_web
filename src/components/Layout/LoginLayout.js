// This handles the layout for the login page

import React from 'react'
import login_styles from './LoginLayout.module.css'

// This is the URL for the background tile in the public folder
const backgroundTileURL = "url('/Background_Tile.png')"

export default function LoginLayout(props) {
  return (
    <div className={login_styles.__main_login_container} style={{backgroundImage: backgroundTileURL}}>
        {props.children}
    </div>
  )
}
