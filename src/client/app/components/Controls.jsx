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
    this.handleReset = this.handleReset.bind(this)
    this.clockTick = this.clockTick.bind(this)
    this.notifyUpdate = this.notifyUpdate.bind(this)
  }

  render() {
    return (
      <div>
        <div><button onClick={this.handleStart}>Start</button></div>
        <div><button onClick={this.handleStop}>Stop</button></div>
        <div><button onClick={this.handleReset}>Reset</button></div>
      </div>
    )
  }

  handleStart() {
    if (!this.state.timerId) {
      this.setState({
        timerId: setInterval(this.clockTick, 1000)
      })
    }
  }

  handleStop() {
    if (this.state.timerId) {
      clearInterval(this.state.timerId)
      this.setState(
        {
          timerId: null
        }
      )
    }
  }

  handleReset() {
    this.handleStop()
    this.setState(
      { secondsLapsed: 0 },
      () => { this.notifyUpdate() }
    )
  }

  clockTick() {
    if (this.state.timerId) {
      this.setState({
        secondsLapsed: this.state.secondsLapsed + 1
      })
      this.notifyUpdate()
    }
  }

  notifyUpdate() {
    this.props.updateHandler(this.state.secondsLapsed)
  }

}
