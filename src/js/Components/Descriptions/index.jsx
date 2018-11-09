import React from 'react';
import { connect } from 'react-redux';
import styles from './descriptions.scss';
import Details from '../Details';
import Preview from '../Preview';
import Button from '../Button';
import { asyncShowTrailer } from '../../actions/movie';

class Descriptions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  handler = () => {
    this.setState(prev => ({ visible: !prev.visible }));
  }

  showTrailer = (id) => {
    const { onShowTrailer } = this.props;
    onShowTrailer(id);
  }

  render() {
    const { visible } = this.state;
    const { overview, id } = this.props;
    return (
      <div className={styles.container}>
        <Details {...this.props} />
        {visible
          ? (
            <div className={styles.prevField}>
              <Preview overview={overview} />
            </div>
          )
          : null
            }
        <div className={styles.buttonsBlock}>
          <Button name="Watch Now" action={() => this.showTrailer(id)} />
          <Button name="View Info" action={this.handler} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    movie: state.movie,
  }),
  dispatch => ({
    onShowTrailer: (id) => {
      dispatch(asyncShowTrailer(id));
    },
  }),
)(Descriptions);
