import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../actions';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import Header from '../components/Header';

const SignUp = (props) => {
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
    props.signUp(form);
    props.history.push('/');
  };

  return (
    <>
      <Header isRegister />
      <section className='login'>
        <div className='login__container'>
          <h2 className='login__title'>Sign Up</h2>
          <form className='login__form' onSubmit={handleSubmit}>
            <input
              type='text'
              className='input'
              placeholder='Name'
              name='name'
              onInput={handleInput}
            />
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
            <input
              type='password'
              className='input'
              placeholder='Confirm password'
              name='confirmPassword'
              onInput={handleInput}
            />
            <button type='submit' className='button'>
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
    </>
  );
};

const mapDispatchToProps = {
  signUp,
};

export default connect(null, mapDispatchToProps)(SignUp);
