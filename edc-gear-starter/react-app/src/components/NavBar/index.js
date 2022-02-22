
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
    <nav>
      {sessionUser && 
      <div id="nav-div">

      
        {sessionUser && 
            <Link exact={true} to='/' >
          <img id="nav-logo" alt="logo" src={edcGear} />
        </Link>}
        {sessionUser && 
        <SearchBar />}
        <ul id="nav-ul">
          {sessionUser && 
          <li>
                <NavLink to='/' exact={true} activeClassName='active'>
                <i className="fas fa-home"></i>
            </NavLink>
          </li>}
          {sessionUser &&
            <AddPostModal />}

          {/* {sessionUser &&
            <li>
              <NavLink className="users-link" to='/users'  exact={true} activeClassName='active'>
                <i className="fas fa-users"></i>
              </NavLink>
            </li>} */}

          {sessionUser &&
            <li>
              <LogoutButton />
            </li>}
          {sessionUser &&
            <li className='nav-li user-info users-link'>
              <Link to={`/users/${sessionUser?.id}`}>
                <img id="nav-user-img" src={sessionUser?.image_url} alt="profile"/>
              </Link>
            </li>}
        
        </ul>
      </div>}
    </nav>
  );
}

export default NavBar;
