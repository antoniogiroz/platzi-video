import React from 'react';

const Carousel = ({ children, title }) => (
  <div className='carousel'>
    <h2>{title}</h2>
    <div className='carousel__container'>{children}</div>
  </div>
);

export default Carousel;
