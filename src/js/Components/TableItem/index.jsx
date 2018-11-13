import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './tableItem.scss';
import RatingBox from '../RatingBox';
import Genres from '../Genres';
import Preview from '../Preview';
import Button from '../Button';
import RoundButton from '../RoundButton';
import { apiUrl } from '../../../assets';
import { asyncShowTrailer } from '../../actions/movie';

class TableItem extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visiblePreview: false,
    };
  }

  handler = () => {
    this.setState(prev => ({ visiblePreview: !prev.visiblePreview }));
  }

  leave = () => {
    this.setState({ visiblePreview: false });
  }

  showTrailer = (id) => {
    const { onShowTrailer } = this.props;
    onShowTrailer(id);
  }

  render() {
    const {
      poster_path, title, vote_average, genre_ids, overview, id,
    } = this.props;
    const { visiblePreview } = this.state;
    const miniPoster = `${apiUrl}/w300/${poster_path}`;
    const noPoster = 'http://wpmovies.scriptburn.com/wp-content/themes/wp_movies/images/noposter.jpg';

    return (
      <div className={styles.container}>
        <div className={styles.miniPoster}>
          { poster_path
            ? <img src={miniPoster} alt="poster" width="100%" height="100%" />
            : <img src={noPoster} alt="poster" width="100%" height="100%" />
          }
        </div>

        {
          !visiblePreview
            ? (
              <div className={styles.description}>
                <div className={styles.descBox}>
                  <span className={styles.title}>{title.toUpperCase()}</span>
                  <RatingBox rating={vote_average} />
                </div>
                <div className={styles.cut}>
                  <Genres genre_ids={genre_ids} />
                </div>
              </div>
            ) : null
        }

        <div className={styles.info} onMouseLeave={this.leave}>
          <div />
          <div className={styles.previewField}>
            <div className={styles.inner}>
              {
                visiblePreview
                  ? (
                    <div className={styles.innerDescr}>
                      <div className={styles.up}>
                        <button type="button" onClick={this.handler} className={styles.button}>&#x2715;</button>
                      </div>
                      <div className={styles.descBox}>
                        <span className={styles.hoverTitle}>{title.toUpperCase()}</span>
                        <RatingBox rating={vote_average} />
                      </div>

                      <div className={styles.cut}>
                        <Genres genre_ids={genre_ids} />
                      </div>
                      <div className={styles.overview}>
                        <Preview overview={overview} />
                      </div>
                      <div style={{width:'200%', marginLeft: '-50px'}}>
                        <hr/>
                      </div>
                      <div className={styles.w}>
                        <Button name="Watch Now" action={() => this.showTrailer(id)} />
                      </div>
                    </div>
                  )

                  : (
                    <div className={styles.buttonBlock}>
                      <RoundButton name="Watch Now" action={() => this.showTrailer(id)} />
                      <Button name="View Info" action={this.handler} />
                    </div>
                  )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => ({
    onShowTrailer: (id) => {
      dispatch(asyncShowTrailer(id));
    },
  }),
)(TableItem);

TableItem.propTypes = {
  onShowTrailer: PropTypes.func.isRequired,
  overview: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  poster_path: PropTypes.string,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  genre_ids: PropTypes.arrayOf(PropTypes.number).isRequired,
};

TableItem.defaultProps = {
  poster_path: null,
};
