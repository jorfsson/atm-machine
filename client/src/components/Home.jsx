import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: props.user,
      message: "Please make a choice...",
      balance: 0
    }
    this.setScreen = props.setScreen;
  }

  getBalance() {
    // axios.get('http://localhost:3000/balance')
    // .then((response) => {
    //   this.setState({
    //   balance: response.data.balance
    // });
    this.setScreen('balance');
  }

  render () {
    return (
      <div className="display__screen">
        <div className="display__screen--half"><p className="title">{this.state.message}</p></div>
        <div className="display__screen--half bottom">
          <div className="field field--left">
            <div className="buttons__item">
              <div className="buttons__field--line"></div>
              <div className="buttons__field--description">Withdraw</div>
            </div>
            <div className="buttons__item">
              <div className="buttons__field--line"></div>
              <div className="buttons__field--description">Deposit</div>
            </div>
          </div>

          <div className="field field--right">
            <div className="field--right buttons__item">
              <div className="buttons__field--description">Balance</div>
              <div className="buttons__field--line"></div>
            </div>
            <div className="field--right buttons__item">
              <div className="buttons__field--description">Re-Enter Pin</div>
              <div className="buttons__field--line"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
