import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn } from '../actions';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import Header from '../components/Header';

const SignIn = (props) => {
  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.signIn(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isLogin />
      <section className='login'>
        <div className='login__container'>
          <h2 className='login__title'>Sign In</h2>
          <form className='login__form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='input'
              placeholder='Email'
              name='email'
              onInput={handleInput}
            />
            <input
              type='password'
              className='input'
              placeholder='Password'
              name='password'
              onInput={handleInput}
            />
            <button type='submit' className='button'>
              Sign in
            </button>
            <div className='login__footer'>
              <label htmlFor='rememberMe'>
                <input type='checkbox' value='checkbox' name='rememberMe' />
                Remember me
              </label>
              <a className='login__forgot-password' href='/'>
                Forgot my password
              </a>
            </div>
          </form>

          <div className='login__social'>
            <a className='login__social-link' href='/'>
              <img src={googleIcon} alt='Google logo' />
              Sign in with Google
            </a>
            <a className='login__social-link' href='/'>
              <img src={twitterIcon} alt='Twitter logo' />
              Sign in with Twitter
            </a>
          </div>

          <div className='login__register'>
            Don&apos;t you have an account yet?
            <Link to='/sign-up'>Sign up</Link>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  signIn,
};

export default connect(null, mapDispatchToProps)(SignIn);
