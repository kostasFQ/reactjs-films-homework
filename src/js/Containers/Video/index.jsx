import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './video.scss';
import { closeTrailerWindow } from '../../actions/movie';

const Video = (props) => {
  const { onCloseWindow, movie } = props;
  const { trailer, errorMessage } = movie;

  return (
    <div>
      <div className={styles.back} onClick={onCloseWindow} role="presentation" />
      <div className={styles.con}>
        <div>
          <button type="button" onClick={onCloseWindow} className={styles.button}>&#x2715;</button>
        </div>
        {
          trailer
            ? (
              <iframe
                width="100%"
                height="100%"
                title={trailer}
                src={trailer}
                className={styles.iframe}
                allow="autoplay; encrypted-media"
                allowFullScreen
                frameBorder="0"
              />
            )
            : <div className={styles.noTrailer}>{errorMessage}</div>
        }
      </div>
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
