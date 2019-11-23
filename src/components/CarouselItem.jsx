import React from 'react';
import PropTypes from 'prop-types';
import playIcon from '../assets/images/play.png';
import plusIcon from '../assets/images/plus.png';

const CarouselItem = ({ title, cover, year, contentRating, duration }) => (
  <div className='carousel__item'>
    <img className='carousel__image' src={cover} alt={title} />
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
      <p className='carousel__subtitle'>
        {`${year} ${contentRating} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
