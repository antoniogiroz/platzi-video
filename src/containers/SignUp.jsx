import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';

const SignUp = () => (
  <section className='login'>
    <div className='login__container'>
      <h2 className='login__title'>Sign Up</h2>
      <form className='login__form'>
        <input type='text' className='input' placeholder='Name' />
        <input type='text' className='input' placeholder='Email' />
        <input type='password' className='input' placeholder='Password' />
        <input
          type='password'
          className='input'
          placeholder='Confirm password'
        />
        <button type='button' className='button'>
          Sign up
        </button>
      </form>

      <div className='login__social'>
        <a className='login__social-link' href='/'>
          <img src={googleIcon} alt='Google logo' />
          Sign up with Google
        </a>
        <a className='login__social-link' href='/'>
          <img src={twitterIcon} alt='Twitter logo' />
          Sign up with Twitter
        </a>
      </div>

      <div className='login__register'>
        Already have an account?
        <Link to='/sign-in'>Sign in</Link>
      </div>
    </div>
  </section>
);

export default SignUp;
