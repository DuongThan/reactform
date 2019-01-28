import React, {Component} from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      account: {
        userName: 'admin',
        password: '12345678'
      }
    }
  }
  handleChangeInpForm = (e) => {
    let newAccount = this.state.account;
    newAccount[e.target.name] = e.target.value;
    this.setState({
      account: newAccount
    })
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.account)
  }

  render() {
    return (
      <div className="App">
        <Form
          account={this.state.account}
          handleChangeInpForm={this.handleChangeInpForm}></Form>
      </div>
    );
  }
}

export default App;
