import React, { useState } from 'react';
import './todoitems.css';
const Todolisttems = (props) => {
  return (
    <li id={props.id}>
      {props.value}{' '}
      <button className="delete-btn" onClick={() => props.removeItem(props.id)}>
        <i class="fa-solid fa-xmark remove"></i>
      </button>
    </li>
  );
};
export default Todolisttems;
