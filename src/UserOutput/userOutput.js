import React from 'react';
import UserOutput from './userOutput.css';

let userOutput = (props) => {
  return (
    <div className="user-text">
      <p>User Name: {props.userName}</p>
      <p>Another paragraph!</p>
    </div>
  );
}

export default userOutput;
