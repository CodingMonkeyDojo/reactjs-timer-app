import React from 'react'

export default class AnalogDisplay extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let lineStyle = {
      stroke: 'rgb(250,0,0)',
      strokeWidth: 2
    }
    return (
      <div className="analog-display">
        <svg>
          <circle cx={50} cy={50} r={40} stroke="blue" strokeWidth={4} fill="white" />
          <line x1={50} y1={50} x2={50 + this.props.secondsLapsed} y2={10} style={lineStyle}></line>
        </svg>
      </div>
    )
  }
}