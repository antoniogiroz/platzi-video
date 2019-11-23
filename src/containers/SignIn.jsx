import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';

const SignIn = () => (
  <section className='login'>
    <div className='login__container'>
      <h2 className='login__title'>Sign In</h2>
      <form className='login__form'>
        <input type='text' className='input' placeholder='Email' />
        <input type='password' className='input' placeholder='Password' />
        <button type='button' className='button'>
          Sign in
        </button>
        <div className='login__footer'>
          <label htmlFor='rememberMe'>
            <input type='checkbox' value='checkbox' id='rememberMe' />
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
);

export default SignIn;
