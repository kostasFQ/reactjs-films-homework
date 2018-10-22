import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './table.scss';
import TableItem from '../TableItem';
import Spiner from '../Spiner';

class Table extends React.PureComponent {
  render() {
    const { currentQuery } = this.props;
    const { fullResponse, fetched } = currentQuery;

    return (
      <div className={s.container}>
        { fullResponse && fetched?
          fullResponse.map(item => <TableItem {...item} key={item.id} />):
          <Spiner/>
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    filmsList: state.filmsList,
    currentQuery: state.movie,
  }),
)(Table);

Table.propTypes = {
  currentQuery: PropTypes.objectOf(PropTypes.any).isRequired,
};
