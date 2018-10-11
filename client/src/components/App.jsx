import React from 'react';
import Display from './Display.jsx';

const Chassis = () =>
  <div className="chassis">
    <div className="display">
      <Display />
    </div>
  </div>

const Sign = () =>
  <div className="sign"></div>

class App extends React.Component {
  render () {
    return (
      <div>
    <Sign />
    <Chassis />
  </div>
    )
  }
}

export default App;
