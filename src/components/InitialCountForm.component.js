import React, { Component } from 'react'
import './../styles/initialcountform.css'

class InitialCountForm extends Component {
  constructor(props) {
    super(props)
    this.state = { submission: 0 }
    this.getInput = this.getInput.bind(this)
    this.checkInput = this.checkInput.bind(this)
  }

  getInput(event) {
    this.setState({ submission: event.target.value })
  }

  checkInput(event) {
    this.setState({ submission: Number(this.state.submission) })
    if (isNaN(this.state.submission)) {
      alert('Not a number!')
    } else {
      this.props.setCount(this.state.submission)
    }
  }

  render() {
    return (
      <div className="initialcountform">
        <input type="text" onChange={this.getInput} />
        <button
          className="inputbutton"
          class="submit"
          onClick={this.checkInput}
        >
          {' '}
          Set Count{' '}
        </button>
      </div>
    )
  }
}

export default InitialCountForm
