import React from 'react';
import './index.scss';
const Stars = (props) => {
  const {width} = props
  // const width = '50%'
  return (
    <div className="stars">
      <span title="Uncontained average rating 4.5" style={{width:width?(width*10+'%'):'0%'}}></span>
    </div>
  );
};

export default Stars;
