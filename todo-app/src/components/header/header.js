import React from 'react'
import "./header.css"

import { Link } from 'react-router-dom'

 function header() {
  return (
    <header>
      <Link to="/">home</Link>
      <Link to="/about">about</Link >

    </header>
  )
}
export default header