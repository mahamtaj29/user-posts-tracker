import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navbar'>
   <ul>
    <li>
        <Link to="/" className="user-link"> Home </Link>
    </li>
   </ul>
    </nav>
  )
}
