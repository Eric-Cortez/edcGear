import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import UploadPicture from '../UploadPicture';

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


  //   useEffect(() => {
  //   const errors = [];
    
  //   // if (username?.length > 40) errors.push("Username must be less than 40 characters.")
  //   if (!imageUrl?.includes("http" || "https") || !imageUrl?.includes(".")) errors.push("Please provide a valid image Url")
  //   if (imageUrl?.length > 255 || imageUrl?.length <= 0) errors.push("Image Url must be less 255 characters")
  //   if (errors) setErrors(errors)

  // }, [imageUrl,username])

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

  // const updateImageUrl = (e) => {
  //   setImageUrl(e.target.value);
  // };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div id="signup-modal-div-main">
      <div id="sign-up-title">
        <h2 id="sign-up-h2">Sign up</h2>
      </div>
      <div className='container-sign-up-div'>
        <div className='left-sign-up-div'>

          <div className='sign-up-image-div'>
            <h5 className='sign-up-image-preview-title'>Profile Image Preview</h5>
            {!imageUrl || !imageUrl?.includes("http" || "https") ?
              <img className="profile-image-preview" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.jennybeaumont.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fplaceholder.gif&f=1&nofb=1" alt='placeholder' />
              : <img className="profile-image-preview" src={imageUrl} alt="profile-preview"
                onError={(e) => { e.target.src = 'https://sonuptraders.com/wp-content/uploads/2019/02/picture-not-available.jpg'; e.target.onError = null; }}
              />
            }
          </div>
          <UploadPicture setImageUrl={setImageUrl} />

        </div>

        <form className="right-sign-up-div" onSubmit={onSignUp}>
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
            <div id="sign-up-submit-btn-div">
              <button id="sing-up-submit-btn" type='submit'>Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
