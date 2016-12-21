import React from 'react'

let DigitalDisplay = props => {
  return (
    <div className="timer-display">
      {formatTime(props.secondsLapsed)}
    </div>
  )
}

function formatTime(seconds) {
  return seconds ?
    `${padUnder60(seconds, 3600)}:${padUnder60(seconds, 60)}:${padUnder60(seconds, 1)}` :
    '00:00:00'
}

function padUnder60(seconds, units) {
  let sub60 = Math.floor(seconds/units) % 60;
  return (sub60 < 10) ? `0${sub60}` : sub60
}

export default DigitalDisplay