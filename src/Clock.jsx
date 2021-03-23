import React from 'react';

let time = new Date().toLocaleString();

class Clock extends React.Component {
  render() {
    return (
      <p className="App-clock">
       <h1>The time is {time}.</h1> 
      </p>
    );
  }
}
export default Clock;