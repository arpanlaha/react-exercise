import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import { UserInput } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, submission: 0 }
    this.getInput = this.getInput.bind(this)
    this.checkInput = this.checkInput.bind(this)
    this.setCount = this.setCount.bind(this)
  }

  getInput(event) {
    this.setState({ submission: event.target.value })
  }

  checkInput(event) {
    this.setState({ submission: Number(this.state.submission) })
    if (isNaN(this.state.submission)) {
      alert('Not a number!')
    } else {
      this.setCount(this.state.submission)
    }
  }

  setCount(value) {
    this.setState({ count: value })
  }

  render() {
    return (
      <div className="app">
        <h1>Hello World!</h1>
        <Instructions
          shouldDisplayImage={true}
          items={['apple', 'banana', 'clementine', 'dragonfruit', 'bl']}
        />
        <br />
        <Counter count={Number(this.state.count)} setCount={this.setCount} />
        <br />
        <UserInput getInput={this.getInput} checkInput={this.checkInput} />
      </div>
    )
  }
}

export default App
