import React, { Component } from 'react'
import './../styles/counter.css'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  increment() {
    this.props.setCount(Number(this.props.count + 1))
  }
  decrement() {
    this.props.setCount(Number(this.props.count - 1))
  }

  render() {
    return (
      <div className="counter">
        <center>Counter</center>
        <center>{this.props.count}</center>
        <button onClick={this.increment} type="button">
          Increment
        </button>
        <button onClick={this.decrement} type="button">
          Decrement
        </button>
      </div>
    )
  }
}

export default Counter
