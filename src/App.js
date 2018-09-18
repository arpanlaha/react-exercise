import React, { Component } from 'react'
import { Instructions } from './components'
import { Counter } from './components'
import { InitialCountForm } from './components'
import './styles/app.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
    this.setCount = this.setCount.bind(this)
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
          items={[
            'I',
            'used',
            'the',
            'reference',
            'to',
            'help',
            'with',
            'this'
          ]}
        />
        <br />
        <Counter count={Number(this.state.count)} setCount={this.setCount} />
        <br />
        <InitialCountForm setCount={this.setCount} />
      </div>
    )
  }
}

export default App
