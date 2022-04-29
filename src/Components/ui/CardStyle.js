import React from 'react';
import './cardStyle.css';
const CardStyle = (props) => {
  return (
    <div className="card">
      <div className="card-body">{props.children}</div>
    </div>
  );
};
export default CardStyle;
