import React from 'react';
import PropTypes from 'prop-types';
import s from './preview.scss';
import Button from '../Button';

class Preview extends React.Component {
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
        <div className={s.buttonsBlock}>
          <Button name="Watch Now" />
          <div className={s.x}>
            {visible ? <div className={s.previewField}>{overview}</div> : null}
            <Button name="View Info" action={this.handler} />
          </div>
        </div>
      </div>
    );
  }
}

export default Preview;

Preview.propTypes = {
  overview: PropTypes.string.isRequired,
};
