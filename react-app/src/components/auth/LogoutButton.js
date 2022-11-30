import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import "../NavBar/NavBar.css"

const LogoutButton = () => {
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button id="log-out-btn" onClick={onLogout}>


    <i className="fa fa-sign-out"></i>
    
    </button>;
};

export default LogoutButton;
