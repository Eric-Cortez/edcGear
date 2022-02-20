import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Demo from './Demo';
import { NavLink, Link } from 'react-router-dom';
import "../Forms/GlobalForm.css"
import logo from "./logo.png"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="login-form-div">
      <div id="left-login-div">
          <img src={logo} alt='logo'/>
      </div>

      <div id="right-login-div">

        <div id="upper-login-div"> 
          <form onSubmit={onLogin}>

              <div>
                {errors.map((error, ind) => (
                  <div key={ind}>{error}</div>
                ))}
              </div>

              <div>
                <label htmlFor='email'>Email</label>
                <input
                  name='email'
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={updateEmail}
                />
              </div>
              <div>
                <label htmlFor='password'>Password</label>
                <input
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={updatePassword}
                />
                <div>
                  <button type='submit'>Log in</button>
                </div>
                <p> OR </p>
              </div>
          </form>
        </div>
        <div>
          <Demo />
        </div>



        <div id="lower-signup-div">
          <p>Do you have an account? </p>
          <NavLink to='/sign-up' exact activeClassName='active'>
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
