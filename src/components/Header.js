import React from 'react'
import { Link } from 'react-router-dom'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/add'>Add Profile</Link></li>
        <li><Link to='/'>See Profiles</Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
