import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar.utils';
import { signOut } from '../actions';
import logo from '../assets/images/logo.png';
import userIcon from '../assets/images/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;

  const handleLogout = () => {
    props.signOut();
    props.history.push('/');
  };

  const headerClasses = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClasses}>
      <Link to='/'>
        <img className='header__logo' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__profile'>
        {user ? (
          <img
            className='profile__image'
            src={gravatar(user.email)}
            alt={user.email}
          />
        ) : (
          <img
            className='profile__image profile__image--default'
            src={userIcon}
            alt=''
          />
        )}

        {user ? <p>{user.email}</p> : <Link to='/sign-in'>Login</Link>}

        {user && (
          <ul className='profile__menu'>
            <li className='menu__item'>
              <a className='menu__link' href='/profile' title='Profile'>
                Profile
              </a>
            </li>
            <li className='menu__item'>
              <a
                className='menu__link'
                href='#sign-out'
                title='Logout'
                onClick={handleLogout}
              >
                Logout
              </a>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
