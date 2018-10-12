import React from 'react';
import s from './descriptions.scss';
import Details from '../Details';
import Preview from '../Preview';

const Descriptions = (props) => {
  const { preview } = props;
  return (
    <div className={s.container}>
      <div className={s.div}>
        <Details {...props}/>
        <Preview preview={preview}/>
      </div>
    </div>
  )
};

export default Descriptions;

