
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../SearchBar';
import edcGear from '../../images/edcGear.png'
import "./NavBar.css"

const NavBar = () => {
 
  const sessionUser = useSelector(state => state?.session?.user)


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
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>} */}
        {!sessionUser && 
        <li>
          <NavLink to='/login' exact activeClassName='active'>
            Login
          </NavLink>
        </li>}
        
        {!sessionUser && 
        <li>
          <NavLink to='/sign-up' exact activeClassName='active'>
            Sign Up
          </NavLink>
        </li>}


        {sessionUser && 
          <NavLink to='/posts'><i className="fal fa-plus-square">+</i></NavLink>
        }

        {sessionUser &&
          <li className='nav-li user-info users-link'>
            <p id="username">{`Welcome, ${sessionUser?.username}`}</p>

          </li>}

        {sessionUser && 
        <li>
          <NavLink className="users-link" to='/users' exact activeClassName='active'>
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
