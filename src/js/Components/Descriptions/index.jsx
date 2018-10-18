import React from 'react';
import s from './descriptions.scss';
import Details from '../Details';
import Preview from '../Preview';

const Descriptions = (props) => {
  const { overview } = props;
  return (
    <div className={s.container}>
      <div className={s.div}>
        <Details {...props} />
        <Preview overview={overview} />
      </div>
    </div>
  );
};

export default Descriptions;
