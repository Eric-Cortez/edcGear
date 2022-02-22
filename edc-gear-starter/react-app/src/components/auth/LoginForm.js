import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import Demo from './Demo';
import "../Forms/GlobalForm.css"
import logo from "./logo.png"
import camera from "./favicon1.png"
import SignUpModal from '../../context/SignUpModal';
 
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
             <div id="camera-image-div">
                <img id="camera-png"src={camera} alt='logo' />
             </div>

              <div id="login-form-errors">
                {errors.map((error, ind) => (
                  <div key={ind}>{`* ${error}`}</div>
                ))}
              </div>

              <div className='login-input-div'>
                {/* <label className="login-input-label" htmlFor='email'>Email</label> */}
                <input
                  className='login-inputs'
                  name='email'
                  type='text'
                  placeholder='Email'
                  value={email}
                  onChange={updateEmail}
                />
              </div>

            <div className='login-input-div'>
              {/* <label className="login-input-label" htmlFor='password'>Password</label> */}
                <input
                  className='login-inputs'
                  name='password'
                  type='password'
                  placeholder='Password'
                  value={password}
                  onChange={updatePassword}
                />
                <div id="login-submit-btn-div">
                <button id="login-submit-btn" type='submit'>Log in</button>
                </div>
              <div className="block_1"><div className="h_line"></div><p id="or-p-tag">OR</p> <div className="h_line"></div></div> 
              </div>
          </form>
        </div>
        <div>
          <Demo />
        </div>



        <div id="lower-signup-div">
          <p id="signup-quest">Do you have an account? </p>
          <SignUpModal />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
