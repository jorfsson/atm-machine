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

          {display}

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
            <button type="button" className="buttons__item__button" />
          </div>
          <div className="buttons__item">
            <div className="buttons__item__line"></div>
            <button type="button" className="buttons__item__button" />
          </div>
        </div>
      </div>
    )
  }
}

export default Display;
