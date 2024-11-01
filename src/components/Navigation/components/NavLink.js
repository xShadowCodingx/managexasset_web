// This is the NavLink component for the navigation

import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink(props) {
  return (
    <Link className={props.className} to={props.url}>{props.text}</Link>
  )
}
