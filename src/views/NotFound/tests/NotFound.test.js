import React from 'react'
import { shallow } from 'enzyme'

import NotFound from '..'

describe('NotFound', () => {
  let props
  beforeEach(() => {
    props = {
      location: {
        pathname: '/literally-anything-that-isnt-valid'
      }
    }
  })

  let component
  beforeEach(() => {
    component = shallow(
      <NotFound {...props} />
    )
  })

  it('should render my name and title', () => {
    expect(component.find('h1').first()
      .text()).toEqual('404. Not Found.')
  })

  it('should contain Nav', () => {
    expect(component.find('Nav').length).toEqual(1)
  })
})
