import React from 'react';
import PropTypes from 'prop-types';
import s from './video.scss';
import { connect } from 'react-redux';
import { closeTrailerWindow } from '../../actions/movie';

const Video = (props) => {
  const { onCloseWindow, movie } = props;
  const { trailer } = movie;

  return (
    <div className={s.container}>
    <div>
      <button type='button' onClick={onCloseWindow}>&#x2715;</button>
    </div>
      <iframe width="100%" height="100%" title={trailer}
        src={trailer}>
      </iframe>
    </div>
  );
};

export default connect(
  state => ({
    movie: state.movie,
  }),
  dispatch => ({
    onCloseWindow: () => {
      dispatch( closeTrailerWindow() );
    }
  }),
)(Video);

Video.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
  onCloseWindow: PropTypes.func.isRequired,
};