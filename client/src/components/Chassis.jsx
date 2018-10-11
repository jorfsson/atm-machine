import React from 'react';
import Display from './Display.jsx';

class Chassis extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser (user) {
    console.log('Setting user to ' + user)
    this.setState({
      user: user
    });
  }

  componentDidUpdate() {
    console.log(this.state.user + " is logged in.")
  }

  render() {
    let creditStatus = this.state.user ? <img className="credit-cards__image__spliced" src={require('../images/creditcard_sprite.png')} /> : false;

    return (
      <div className="chassis">
          <div className="credit-cards">
            <img className="credit-cards__image" src={require('../images/creditcard_sprite.png')} />
            {creditStatus}
          </div>
          <Display setUser={this.setUser} user={this.state.user} />
      </div>
    )
  }
}

export default Chassis;
