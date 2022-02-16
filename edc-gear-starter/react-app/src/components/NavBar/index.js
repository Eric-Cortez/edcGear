
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../SearchBar';
import edcGear from '../../images/edcGear.png'
import "./NavBar.css"

const NavBar = () => {
  const dispatch = useDispatch
  const sessionUser = useSelector(state => state?.session?.user)
  console.log(sessionUser)

  useEffect (() => {

  }, [])

  return (
    <nav id="nav-div">
      <Link exact to='/' >
        <img id="nav-logo" alt="logo" src={edcGear} />
      </Link>
      {sessionUser && 
      <SearchBar />}
      <ul id="nav-ul">
        {/* {sessionUser && 
        <li>
          <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>} */}
        {!sessionUser && 
        <li>
          <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>
        </li>}
        
        {!sessionUser && 
        <li>
          <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>
        </li>}


        {sessionUser && 
        <li>
          <NavLink id="users-link" to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li>}
        {sessionUser && 
        <li>
          <LogoutButton />
        </li>}
      </ul>
    </nav>
  );
}

export default NavBar;
