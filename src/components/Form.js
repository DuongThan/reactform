import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

export class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.props.account);
    ReactDOM.findDOMNode(this.refs.userName).focus();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>UserName</label>
            <input
              name="userName"
              type="text"
              value={this.props.account.userName}
              onChange={this.props.handleChangeInpForm}
              placeholder="input your username"
              ref="userName"/>
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="text"
              value={this.props.account.password}
              onChange={this.props.handleChangeInpForm}
              placeholder="********"></input>
          </div>
          <div style={{
            textAlign: "center"
          }}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
Form.propTypes = {
  account: PropTypes.object.isRequired
}
export default Form
