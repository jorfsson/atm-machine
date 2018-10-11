import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "You"
    }
  }
  
  componentDidMount() {

  }
  render () {
    return (
    <div>You are logged in!</div>
    )
  }
}

export default Home;
