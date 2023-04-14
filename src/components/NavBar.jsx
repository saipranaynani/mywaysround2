import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="navBar">
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/addFood">
        Add Food
      </Link>
    </nav>
  )
}

export default NavBar