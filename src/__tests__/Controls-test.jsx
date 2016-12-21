import React from 'react'
import {mount} from 'enzyme'
import Controls from '../client/app/components/Controls'

describe('Testing state management for Controls component', () => {

  var controls
  var handlerFunction

  beforeEach(() => {
    jest.useFakeTimers()

    handlerFunction = jest.fn()

    controls = mount(
      <Controls updateHandler={handlerFunction}/>
    ).instance()
  })

  it('clockTick increments secondsLapsed', () => {
    controls.handleStart()

    controls.clockTick()

    expect(controls.state.secondsLapsed).toBe(1)

    controls.clockTick()

    expect(controls.state.secondsLapsed).toBe(2)

  })

  it('handleReset() should set control state secondsLapsed', () => {
    controls.handleStart()

    controls.clockTick()

    expect(controls.state.secondsLapsed).toBe(1)

    controls.handleReset()

    expect(controls.state.secondsLapsed).toBe(0)
  })

  it('handleStop() should prevent clockTick() to increment controls.state.secondsLapsed', () => {
    controls.handleStart()

    controls.clockTick()
    expect(controls.state.secondsLapsed).toBe(1)

    controls.handleStop()
    expect(controls.state.secondsLapsed).toBe(1)

    controls.clockTick()
    expect(controls.state.secondsLapsed).toBe(1)
  })

  it('if timer has not start, should prevent clockTick() to increment controls.state.secondsLapsed', () => {
    controls.clockTick()
    expect(controls.state.secondsLapsed).toBe(0)
  })

  it('update handler should be called whenever state.secondsLapsed is changed by clockTick()', () => {
    controls.handleStart()

    controls.clockTick()
    expect(handlerFunction.mock.calls.length).toBe(1)

    controls.clockTick()
    expect(handlerFunction.mock.calls.length).toBe(2)
  })

  it('update handler should be called whenever state.secondsLapsed is changed by handleReset()', () => {
    controls.handleStart()
    controls.clockTick()
    controls.handleReset()

    expect(handlerFunction.mock.calls.length).toBe(2)
  })

  it('multiple handleStart() should not set multiple intervals', () => {
    controls.handleStart()
    controls.handleStart()
    controls.clockTick()

    expect(setInterval.mock.calls.length).toBe(1)
  })

})
