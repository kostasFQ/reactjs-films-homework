import React from 'react';
import classNames from 'classnames';
import styles from './list.scss';
import Categories from '../../Components/Categories';
import Table from '../../Components/Table';


class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      rows: false,
    };
  }

  changeToTiles = () => {
    this.setState({ rows: false });
  }

  changeToRows = () => {
    this.setState({ rows: true });
  }

  render() {
    const { rows } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.position}>
            <Categories />
            <div className={styles.displayStyle}>
              <button className={classNames({ [styles.conf]: true, [styles.active]: !rows })} type="button" onClick={this.changeToTiles}>
              <div style={{ position: 'relative', top: '-2px' }}>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              <div style={{ position: 'relative', top: '-2px' }}>
                <div className={styles.square}></div>
                <div className={styles.square}></div>
              </div>
              </button>
              <button className={classNames({ [styles.conf]: true, [styles.active]: rows })} type="button" onClick={this.changeToRows}>
                {/* <span className={styles.min}>&#x2014;</span> */}
                <div style={{ position: 'relative', top: '-2px' }}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
              </div>
              </button>
            </div>
          </div>
          <Table rows={rows} />
        </div>
      </div>
    );
  }
}

export default List;
