import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password, imageUrl));
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(["Passwords Don't Match"])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateImageUrl = (e) => {
    setImageUrl(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="signup-modal-div-main">
      <form onSubmit={onSignUp}>

        <div id="sign-up-title">
          <h2 id="sign-up-h2">Sign up</h2>
        </div>

        <div className='each-error-div sign-up-err'>
          {errors.map((error, ind) => (
            <div id="err-sing-up" key={ind}>{`* ${error}`}</div>
          ))}
        </div>

        <div id="sing-up-form-content">
          <div className='login-input-div'>
            <label
              className="login-input-label"
            >User Name</label>
            <input
              className='login-inputs sing-up-input'
              placeholder='User Name'
              required
              type='text'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div className='login-input-div'>
            <label
              className="login-input-label"
            >Email</label>
            <input
              className='login-inputs sing-up-input'
              placeholder='Email'
              required
              type='email'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>

          <div className='login-input-div'>
            <label
              className="login-input-label"
            >Password</label>
            <input
              className='login-inputs sing-up-input'
              placeholder='Password'
              required
              type='password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div className='login-input-div'>
            <label
              className="login-input-label"
            >Repeat Password</label>
            <input
              className='login-inputs sing-up-input'
              placeholder='Repeat Password'
              required
              type='password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
            ></input>
          </div>

          <div className='login-input-div sign-up-image-input'>
            <label
              className="login-input-label"
            >imageUrl</label>
            <input
              className='login-inputs sing-up-input'
              placeholder='Image Url'
              required
              type='text'
              name='imageUrl'
              onChange={updateImageUrl}
              value={imageUrl}
            ></input>
          </div>

          <div id="sign-up-submit-btn-div">
            <button id="sing-up-submit-btn" type='submit'>Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
