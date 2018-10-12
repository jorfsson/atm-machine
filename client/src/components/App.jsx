import React from 'react';
import Display from './Display.jsx';
import Chassis from './Chassis.jsx';

const Sign = () =>
  <div className="sign">
    <img className="sign__image" src={require('../images/atm_sign.png')} />
    <img className="images graffiti" src={require('../images/graffiti.png')} />
  </div>

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
