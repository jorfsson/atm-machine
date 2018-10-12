import React from 'react';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Balance from './Balance.jsx';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      screen: 'home'
    };
    this.setUser = props.setUser;
    this.setScreen = this.setScreen.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user,
    })
  }

  setScreen(screen) {
    this.setState({
      screen: screen
    })
    console.log('screen')
  }

  render () {
    console.log('rerendering with: ' + this.state.user)
    let display,
        screens = {
          home: {
            screen: <Home user={this.state.user} />,
            button3: () => this.setScreen('balance'),
            button4: null
          },
          login: {
            screen: <Login setUser={this.setUser} />,
          },
          balance: {
            screen: <Balance />,
            button3: null,
            button4: () => this.setScreen('home')
          }
        }

    if (this.state.user) {
      display = screens[this.state.screen]
    } else {
      display = screens.login;
    }

    return (
      <div className="display">
        <div className="display__buttons display__buttons--left">
          <div className="buttons__item">
            <button type="button" className="buttons__item__button" />
            <div className="buttons__item__line"></div>
          </div>
          <div className="buttons__item">
            <button type="button" className="buttons__item__button" />
            <div className="buttons__item__line"></div>
          </div>
          <div className="buttons__item">
            <button type="button" className="buttons__item__button" />
            <div className="buttons__item__line"></div>
          </div>
          <div className="buttons__item">
            <button type="button" className="buttons__item__button" />
            <div className="buttons__item__line"></div>
          </div>
        </div>

          {display.screen}

        <div className="display__buttons display__buttons--right">
          <div className="buttons__item">
            <div className="buttons__item__line"></div>
            <button type="button" className="buttons__item__button" />
          </div>
          <div className="buttons__item">
            <div className="buttons__item__line"></div>
            <button type="button" className="buttons__item__button" />
          </div>
          <div className="buttons__item">
            <div className="buttons__item__line"></div>
            <button type="button" className="buttons__item__button" onClick={display.button3}/>
          </div>
          <div className="buttons__item">
            <div className="buttons__item__line"></div>
            <button type="button" className="buttons__item__button" onClick={display.button4}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Display;
