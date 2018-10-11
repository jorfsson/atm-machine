import React from 'react';
import Login from './Login.jsx';
import Home from './Home.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser (user) {
    this.setState({
      user: user
    })
  }

  render () {
    return this.state.user ? <Home user={this.state.user} /> : <Login setUser={this.setUser} />
  }
}

export default Display;
