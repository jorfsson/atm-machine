import React from 'react';
import axios from 'axios';

class Balance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: `Your balance is...`
    }
    this.setScreen = props.setScreen;
  }

  componentDidMount() {
    axios.get('http://localhost:3000/balance')
      .then((response) => {
        this.setState({
        message: `Your balance is... $${response.data.balance}`
      });
    })
  }

  render () {
    return (
      <div className="display__screen">
        <div className="display__screen--half"><p className="title">{this.state.message}</p></div>
        <div className="display__screen--half bottom">
          <div className="field field--left">
          </div>

          <div className="field field--right">
            <div className="field--right buttons__item">
            </div>
            <div className="field--right buttons__item">
              <div className="buttons__field--description">Go Back</div>
              <div className="buttons__field--line"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Balance;
