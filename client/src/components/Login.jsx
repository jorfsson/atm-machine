import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
    this.setUser = props.setUser;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (parseInt(this.state.value) && this.state.value.length === 4) {
      this.setUser(this.state.value)
    } else {
      alert("Invalid Pin! Please enter a 4 digit number.")
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="login__pin" onSubmit={this.handleSubmit}>
        <input className="login__pin__input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Enter in a pin..." />
      </form>
    </div>
    )
  }
}

export default Login;
