import React from 'react';
import Display from './Display.jsx';

const Chassis = () =>
  <div className="chassis">
      <Display />
  </div>

const Sign = () =>
  <div className="sign"></div>

class App extends React.Component {
  render () {
    return (
      <div className="container">
        <Sign />
        <Chassis />
      </div>
    )
  }
}

export default App;
