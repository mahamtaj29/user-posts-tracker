import React from 'react'
import {Link} from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='content'>
   <ul className='content1' >
    <li>
        <Link to="/" className="user-link"> Home </Link>
    </li>
   </ul>
    </nav>
  )
}
