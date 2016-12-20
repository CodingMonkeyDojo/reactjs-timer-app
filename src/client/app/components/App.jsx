import React from 'react'
import Display from './Display.jsx'
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
    return (
      <div>
        <section>
          <h2>Timer</h2>
        </section>
        <section>
          <Display secondsLapsed={this.state.secondsLapsed}/>
        </section>
        <section>
          <Controls updateHandler={this.timeUpdated} />
        </section>
      </div>
    )
  }

  timeUpdated(secondsLapsed) {
    this.setState({secondsLapsed: secondsLapsed})
  }
}
