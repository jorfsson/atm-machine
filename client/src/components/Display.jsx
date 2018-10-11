import React from 'react';
import Login from './Login.jsx';
import Home from './Home.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user
    };
    this.setUser = props.setUser;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user
    })
  }

  render () {
    console.log('rerendering with: ' + this.state.user)
    let display;
    this.state.user ? (display = <Home user={this.state.user} />, true)
                    : (display = <Login setUser={this.setUser} />, false)

    return (
      <div className="display">
        <div className="display__buttons-left">
          <div className="display__buttons-left__item"></div>
          <div className="display__buttons-left__item"></div>
          <div className="display__buttons-left__item"></div>
          <div className="display__buttons-left__item"></div>
        </div>
        <div className="display__screen">
          {display}
        </div>
        <div className="display__buttons-right">
          <div className="display__buttons-right__item"></div>
          <div className="display__buttons-right__item"></div>
          <div className="display__buttons-right__item"></div>
          <div className="display__buttons-right__item"></div>
        </div>
      </div>
    )
  }
}

export default Display;
