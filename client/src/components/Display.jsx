import React from 'react';
import Login from './Login.jsx';
import Home from './Home.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  render () {
    return this.state.user ? <Home /> : <Login />
  }
}

export default Display;
