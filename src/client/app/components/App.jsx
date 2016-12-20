import React from 'react'
import DigitalDisplay from './DigitalDisplay.jsx'
import AnalogDisplay from './AnalogDisplay.jsx'
import Controls from './Controls.jsx'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLapsed: 0
    }
    this.timeUpdated = this.timeUpdated.bind(this)
  }

  render() {
    let digitalDisplayStyle = {
      float: 'left',
      border: '1px solid red'
    }
    return (
      <div>
        <h2>Timer</h2>
        <div style={digitalDisplayStyle}>
          <DigitalDisplay secondsLapsed={this.state.secondsLapsed}/>
        </div>
        <div>
          <AnalogDisplay secondsLapsed={this.state.secondsLapsed}/>
        </div>
        <div>
          <Controls updateHandler={this.timeUpdated} />
        </div>
      </div>
    )
  }

  timeUpdated(secondsLapsed) {
    this.setState({secondsLapsed: secondsLapsed})
  }
}
