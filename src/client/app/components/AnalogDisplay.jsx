import React from 'react'

let AnalogDisplay = props => {
  let lineStyle = {
    stroke: 'rgb(250,0,0)',
    strokeWidth: 2
  }

  let clockRadius = 40
  let clockX = 50
  let clockY = 50

  let degree = (props.secondsLapsed % 60) / 60 * 360 / 180 * Math.PI

  let offsetX = Math.round(clockRadius * Math.sin(degree))
  let offsetY = Math.round(clockRadius * Math.cos(degree))

  return (
    <div className="analog-display">
      <svg>
        <circle cx={clockX} cy={clockY} r={clockRadius} stroke="blue" strokeWidth={4} fill="white" />
        <line x1={clockX} y1={clockY} x2={clockX + offsetX} y2={clockY - offsetY} style={lineStyle}></line>
      </svg>
    </div>
  )
}

export default AnalogDisplay