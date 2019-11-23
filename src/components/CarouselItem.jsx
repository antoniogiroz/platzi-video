import React from 'react';
import playIcon from '../assets/images/play.png';
import plusIcon from '../assets/images/plus.png';

const CarouselItem = ({ children, title, subtitle }) => (
  <div className='carousel__item'>
    <img className='carousel__image' src='https://picsum.photos/500' alt='' />
    <div className='carousel__details'>
      <div>
        <img className='carousel__action' src={playIcon} alt='Play video' />
        <img
          className='carousel__action'
          src={plusIcon}
          alt='Add to playlist'
        />
      </div>
      <p className='carousel__title'>{title}</p>
      <p className='carousel__subtitle'>{subtitle}</p>
    </div>
  </div>
);

export default CarouselItem;
