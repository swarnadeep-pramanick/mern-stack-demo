import React,{ useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { authContext } from '../context/auth.context'
import './NavLinks.css'
const NavLinks = (props) => {

    const auth = useContext(authContext)
    const logout = () => {
        auth.logout()
    }
  return (
    <ul className='nav-links'>
        <li>
            <NavLink to='/' exact>All Users</NavLink>
        </li>
        {auth.isLoggedIn && <li>
            <NavLink to='/u1/places'>My Places</NavLink>
        </li>}
        {auth.isLoggedIn &&  <li>
            <NavLink to='/places/new'>New Places</NavLink>
        </li>}
        {!auth.isLoggedIn && <li>
            <NavLink to='/auth'>Authenticate</NavLink>
        </li>}
        {auth.isLoggedIn &&  <li>
            <a href='test' onClick={logout}>Logout</a>
        </li>}
    </ul>
  )
}

export default NavLinks