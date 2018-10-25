import React from 'react';
import s from './list.scss';
import Categories from '../../Components/Categories';
import Table from '../../Components/Table';
import classNames from 'classnames';

class List extends React.PureComponent {
  constructor(props){
    super(props);
    this.state ={
      rows: false
    }
  }

  changeToTiles = () => {
    this.setState({rows: false})
  }
  changeToRows = () => {
    this.setState({rows: true})
  }

  render() {
    const { rows } = this.state;
    return (
    <div className={s.container}>
      <div className={s.inner}>
        <div className={s.position}>
          <Categories />
          <div className={s.displayStyle}>
            <button classNames={ classNames( { [s.conf]: true, [s.active]: !rows } ) } type='button' onClick={this.changeToTiles}><span className={s.char}>&#x271B;</span></button>
            <button className={ classNames( { [s.conf]: true, [s.active]: rows } ) } type='button' onClick={this.changeToRows}><span className={s.min}>&#x2014;</span></button>
          </div>
        </div>
        <Table rows={rows} />
      </div>
    </div>
    )
  }
};

export default List;