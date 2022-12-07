
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
            <Link to='/' >
          <img id="nav-logo" alt="logo" src={edcGear} />
        </Link>}
        {sessionUser && 
        <SearchBar />}
        <ul id="nav-ul">
          {sessionUser && 
          <li>
                <NavLink to='/' activeClassName='active'>
                <i className="fas fa-home"></i>
            </NavLink>
          </li>}
          {sessionUser &&
            <AddPostModal />}

          {/* {sessionUser &&
            <li>
              <NavLink className="users-link" to='/users' activeClassName='active'>
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
                {!sessionUser?.image_url ?
              <img id="nav-user-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='default-img' /> :
              <img id="nav-user-img" src={sessionUser?.image_url} alt="profile"
                      onError={(e) => { e.target.src = 'https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswersstaticfilecdnv2.azureedge.net%2Fstatic%2Fimages%2Fimage-not-found.jpg'; e.target.onError = null; }}
              />
                }
              </Link>
            </li>}
        
        </ul>
      </div>}
    </nav>
  );
}

export default NavBar;
