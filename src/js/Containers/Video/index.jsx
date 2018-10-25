import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './video.scss';
import { closeTrailerWindow } from '../../actions/movie';

const Video = (props) => {
  const { onCloseWindow, movie } = props;
  const { trailer, errorMessage } = movie;

  return (
    <div className={s.con}>
      <div>
        <button type="button" onClick={onCloseWindow} className={s.button}>&#x2715;</button>
      </div>
      {
      trailer
        ? (
          <iframe
            width="100%"
            height="100%"
            title={trailer}
            src={trailer}
            className={s.iframe}
          />
        )
        : <div className={s.noTrailer}>{errorMessage}</div>
    }
    </div>
  );
};

export default connect(
  state => ({
    movie: state.movie,
  }),
  dispatch => ({
    onCloseWindow: () => {
      dispatch(closeTrailerWindow());
    },
  }),
)(Video);

Video.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
  onCloseWindow: PropTypes.func.isRequired,
};
