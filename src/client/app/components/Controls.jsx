import React from 'react'

export default class Controls extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timerId: null,
      secondsLapsed: 0
    }
    this.handleStart = this.handleStart.bind(this)
    this.handleStop = this.handleStop.bind(this)
    this.clockTick = this.clockTick.bind(this)
    this.notifyUpdate = this.notifyUpdate.bind(this)
  }

  render() {
    return (
      <div>
        <div><button onClick={this.handleStart}>Start</button></div>
        <div><button onClick={this.handleStop}>Stop</button></div>
        <div><button>Reset</button></div>
      </div>
    )
  }

  notifyUpdate() {
    this.props.updateHandler(this.state.secondsLapsed)
  }

  handleStart() {
    this.setState({
      timerId: setInterval(this.clockTick, 1000)
    })
  }

  clockTick() {
    this.setState({
      secondsLapsed: this.state.secondsLapsed + 1
    })
    this.notifyUpdate()
  }

  handleStop() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
    }
  }
}