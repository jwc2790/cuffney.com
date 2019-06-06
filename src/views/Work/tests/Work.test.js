import React from 'react'
import { shallow } from 'enzyme'

import Work from '..'

// NOTE: seems like this seems to need to be before the import
jest.mock('projects', () => ({
  projects: [
    {
      slug: 'slug',
      src: '/imgs/work/test.jpg',
      title: 'Title',
      to: 'https://google.com'
    }
  ]
}))

describe('Work', () => {
  let props
  beforeEach(() => {
    props = {
      location: {
        pathname: '/work'
      }
    }
  })

  let component
  beforeEach(() => {
    component = shallow(
      <Work {...props} />
    )
  })

  it('should render my name and title', () => {
    expect(component.find('h1').first()
      .text()).toEqual('Work.')
  })

  it('should contain Nav', () => {
    expect(component.find('Nav').length).toEqual(1)
  })

  it('should contain 1 Card with correct props', () => {
    expect(component.find('Card').length).toEqual(1)
    expect(component.find('Card').first()
      .props()).toEqual({
      slug: 'slug',
      src: '/imgs/work/test.jpg',
      title: 'Title',
      to: 'https://google.com'
    })
  })
})
