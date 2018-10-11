import React from 'react';

class Login extends React.Component {
  render () {
    return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      <form className="login__pin">
        <input className="login__pin__input" type="text" placeholder="Enter in a pin..." />
      </form>
    </div>
    )
  }
}

export default Login;
