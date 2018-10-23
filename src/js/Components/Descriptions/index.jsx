import React from 'react';
import s from './descriptions.scss';
import Details from '../Details';
import Preview from '../Preview';
import Button from '../Button';

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

  render() {
    const { visible } = this.state;
    const { overview } = this.props;
    return (
      <div className={s.container}>
          <Details {...this.props} />
            {visible ? 
              <div className={s.prevField}>
                <Preview overview={overview} />
              </div>:
              null
            }
          <div className={s.buttonsBlock}>
            <Button name="Watch Now" />
            <Button name="View Info" action={this.handler}/>
          </div>
      </div>
    );
  }
};

export default Descriptions;
