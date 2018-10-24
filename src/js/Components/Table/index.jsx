import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './table.scss';
import TableItem from '../TableItem';
import Spiner from '../Spiner';

class Table extends React.PureComponent {

  render() {
    const { movie } = this.props;
    const { fullResponse, finishFetch } = movie;

    return (
      <div className={s.container}>
        { fullResponse && finishFetch
          ? fullResponse.map(item => <TableItem {...item} key={item.id} />)
          : <Spiner />
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    movie: state.movie,
  })
)(Table);

Table.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
};
