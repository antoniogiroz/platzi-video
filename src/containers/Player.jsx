import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getVideoSource } from '../actions';

const Player = ({ match, history, playing, getVideoSource }) => {
  const { id } = match.params;

  useEffect(() => {
    getVideoSource(id);
  }, []);

  return playing ? (
    <div className='player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='player-back'>
        <button type='button' onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

const mapStateToProps = (state) => ({
  playing: state.playing,
});

const mapDispatchToProps = {
  getVideoSource,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
