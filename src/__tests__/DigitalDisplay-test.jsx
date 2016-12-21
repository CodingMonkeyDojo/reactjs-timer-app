import React from 'react'
import {shallow} from 'enzyme'
import DigitalDisplay from '../client/app/components/DigitalDisplay'

it('Digital Display should be initialized with 0s', () => {
  let digitalDisplay = shallow(
    <DigitalDisplay />
  )

  expect(digitalDisplay.text()).toEqual('00:00:00')
})

it('59 seconds', () => {
  let digitalDisplay = shallow(
    <DigitalDisplay secondsLapsed={59}/>
  )

  expect(digitalDisplay.text()).toEqual('00:00:59')
})

it('60 seconds should turn over to 1 minute', () => {
  let digitalDisplay = shallow(
    <DigitalDisplay secondsLapsed={60}/>
  )

  expect(digitalDisplay.text()).toEqual('00:01:00')
})

it('59 minutes and 59 seconds', () => {
  let digitalDisplay = shallow(
    <DigitalDisplay secondsLapsed={59 * 60 + 59}/>
  )

  expect(digitalDisplay.text()).toEqual('00:59:59')
})

it('1 hour', () => {
  let digitalDisplay = shallow(
    <DigitalDisplay secondsLapsed={60 * 60}/>
  )

  expect(digitalDisplay.text()).toEqual('01:00:00')
})

it.skip('99 hours 59 minutes and 59 seconds', () => {
  let digitalDisplay = shallow(
    <DigitalDisplay secondsLapsed={99 * 60 * 60 + 59 * 60 + 59}/>
  )

  expect(digitalDisplay.text()).toEqual('99:59:59')
})
