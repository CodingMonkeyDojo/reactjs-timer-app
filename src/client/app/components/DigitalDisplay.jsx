import React from 'react'

export default class DigitalDisplay extends React.Component {
  constructor(props) {
    super(props)
    this.formatTime = this.formatTime.bind(this)
  }

  render() {
    return (
      <div className="timer-display">
        {this.formatTime(this.props.secondsLapsed)}
      </div>
    )
  }

  formatTime(seconds) {
    return seconds ?
      `${DigitalDisplay.padUnder60(seconds, 3600)}:${DigitalDisplay.padUnder60(seconds, 60)}:${DigitalDisplay.padUnder60(seconds, 1)}` :
      '00:00:00'
  }

  static padUnder60(seconds, units) {
    let sub60 = Math.floor(seconds/units) % 60;
    return (sub60 < 10) ? `0${sub60}` : sub60
  }

}
