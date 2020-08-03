import React from 'react';
import UserInput from './UserInput/userInput';
import UserOutput from './UserOutput/userOutput';
import './App.css';

class App extends React.Component {

  state = {
    name:
    [
      { userName: "Yogesh" },
      { userName: "Yansh" },
      { userName: "Priyanka" },
    ]
  };

  nameChangedHandler = (event) => {
    this.setState({
      name:
        [
          { userName: "Yogesh" },
          { userName: event.target.value },
          { userName: "Priyanka" },
        ]
    });
  }

  render () {
    return (
      <div className="App">
        <UserInput changed={this.nameChangedHandler} name={this.state.name[1].userName} />
        <UserOutput userName={this.state.name[0].userName} />
        <UserOutput userName={this.state.name[1].userName} />
        <UserOutput userName={this.state.name[2].userName} />
      </div>
    );
  }
}

export default App;
