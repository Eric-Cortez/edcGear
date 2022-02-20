
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import SearchBar from '../SearchBar';
import edcGear from '../../images/edcGear.png'
import "./NavBar.css"
import AddPostModal from '../../context/AddPostModal';

const NavBar = () => {
 
  const sessionUser = useSelector(state => state?.session?.user)


  useEffect (() => {

  }, [])

  return (
    <nav id="nav-div">


      {sessionUser && 
      <Link exact to='/' >
        <img id="nav-logo" alt="logo" src={edcGear} />
      </Link>}
      {sessionUser && 
      <SearchBar />}
      <ul id="nav-ul">
        {sessionUser && 
        <li>
          <NavLink to='/' exact activeClassName='active'>
              <i class="fas fa-home"></i>
          </NavLink>
        </li>}
        {sessionUser &&
          <AddPostModal />
          // <NavLink to='/posts'><i className="far fa-plus-square"></i></NavLink>
        }
        {sessionUser &&
          <li>
            <NavLink className="users-link" to='/users' exact activeClassName='active'>
              <i class="fas fa-users"></i>
            </NavLink>
          </li>}

        {sessionUser &&
          <li>
            <LogoutButton />
          </li>}
        {sessionUser &&
          <li className='nav-li user-info users-link'>
            {/* <p id="username">{`Welcome, ${sessionUser?.username}`}</p> */}
            <img id="nav-user-img" src={sessionUser?.image_url}/>
          </li>}




        {!sessionUser && 
        <>
          <li>
            <NavLink to='/login' exact activeClassName='active'>
              Login
            </NavLink>
          </li>
          <li>
            {/* <NavLink to='/sign-up' exact activeClassName='active'>
              Sign Up
            </NavLink> */}
          </li>
          </> }


       
      </ul>
    </nav>
  );
}

export default NavBar;
