import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addFavorite, deleteFavorite } from '../actions';
import playIcon from '../assets/images/play-icon.png';
import plusIcon from '../assets/images/plus-icon.png';
import trashIcon from '../assets/images/trash-icon.png';

const CarouselItem = (props) => {
  const { id, title, cover, year, contentRating, duration, isFavorite } = props;
  const handleAddFavorite = () => {
    props.addFavorite({ id, title, cover, year, contentRating, duration });
  };
  const handleDeleteFavorite = () => {
    props.deleteFavorite(id);
  };
  return (
    <div className='carousel__item'>
      <img className='carousel__image' src={cover} alt={title} />
      <div className='carousel__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img className='carousel__action' src={playIcon} alt='Play video' />
          </Link>
          {isFavorite ? (
            <img
              className='carousel__action'
              src={trashIcon}
              alt='Remove from favorites'
              onClick={handleDeleteFavorite}
            />
          ) : (
            <img
              className='carousel__action'
              src={plusIcon}
              alt='Add to favorites'
              onClick={handleAddFavorite}
            />
          )}
        </div>
        <p className='carousel__title'>{title}</p>
        <p className='carousel__subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  addFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
