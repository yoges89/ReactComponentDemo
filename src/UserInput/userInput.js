import React from 'react';

let userInput = (props) => {

  const styles = {
    margin: '15px',
    border: '1px solid aqua',
    color: 'green',
    width: '64%',
    boxShadow: "0 .5px 30px #bd1e2c",
    height: '30px'
  }

  return <input
    type="text"
    value={props.name}
    onChange={props.changed}
    style={styles} />
}

export default userInput;
