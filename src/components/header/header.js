//import React from 'react'
import { Link } from 'react-router-dom'

import './header.css'

const Header = () => {
  return (
    <div className="header d-flex">
      <span>
        <Link to="/">R & M DB</Link>
      </span>
      <ul className="d-flex">
        <li>
          <Link to="/characters/">Characters</Link>
        </li>
        <li>
          <Link to="/episodes/">Episodes</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
