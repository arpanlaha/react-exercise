import React, { Component } from 'react'

class UserInput extends Component {
  constructor(props) {
    super(props)
    this.state = { submission: 0 }
    this.getInput = props.getInput
    this.checkInput = props.checkInput
  }

  render() {
    return (
      <div className="userinput">
        <input type="text" onChange={this.getInput} />
        <button class="submit" onClick={this.checkInput}>
          {' '}
          Set Count{' '}
        </button>
      </div>
    )
  }
}

export default UserInput
