import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import s from './table.scss';
import TableItem from '../TableItem';
import TableItemRow from '../TableItemRow';
import Spiner from '../Spiner';
import Footer from '../Footer';


class Table extends React.PureComponent {
  dis = (item) => {
    const { rows } = this.props;
    if (rows) {
      return <TableItemRow {...item} key={item.id} />;
    }
    return <TableItem {...item} key={item.id} />;
  }

  render() {
    const { movie } = this.props;
    const { fullResponse, finishFetch, startAdvanceFetch } = movie;

    return (
      <div>
        <div className={s.container}>
          { fullResponse && finishFetch
            ? fullResponse.map(item => this.dis(item))
            : <Spiner />
          }
          <div className={s.container}>
            { startAdvanceFetch && (
            <div>
              {' '}
              <Spiner />
              {' '}
            </div>
            ) }
          </div>
          <div className={s.container}>
            <Footer />
          </div>

        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    movie: state.movie,
  }),
)(Table);

Table.propTypes = {
  movie: PropTypes.objectOf(PropTypes.any).isRequired,
  rows: PropTypes.bool.isRequired,
};
