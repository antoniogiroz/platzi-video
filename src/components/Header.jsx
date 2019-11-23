import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import userIcon from '../assets/images/user.png';

const Header = () => (
  <header className='header'>
    <Link to='/'>
      <img className='header__logo' src={logo} alt='Platzi Video' />
    </Link>
    <div className='header__profile'>
      <img className='profile__image' src={userIcon} alt='Antonio Gil' />
      <p>Antonio Gil</p>

      <ul className='profile__menu'>
        <li className='menu__item'>
          <a className='menu__link' href='/' title='Profile'>
            Profile
          </a>
        </li>
        <li className='menu__item'>
          <a className='menu__link' href='/' title='Log out'>
            Log out
          </a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
