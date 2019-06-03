import React from 'react';
import { shallow } from 'enzyme';

import Home from '..';

describe('Home', () => {

  const LINKEDIN = 'https://www.linkedin.com/in/cuffney/';
  const GITHUB = 'https://github.com/jcuffney';

  let props;
  beforeEach(() => {
    props = {
      location: {
        pathname: '',
      }
    }
  })

  let component;
  beforeEach(() => {
    component = shallow(
      <Home { ...props } />
    );
  })

  it('should contain Nav', () => {
    expect(component.find('Nav').length).toEqual(1);
  })

  it('should contain icon and link - github', () => {
    expect(component.find('FaGithub').length).toEqual(1);
    expect(component.find(`a[href="${ GITHUB }"]`).length).toEqual(1);
    expect(component.find(`a[href="${ GITHUB }"]`).prop('target')).toEqual('_blank');
  })

  it('should contain icon and link - github', () => {
    expect(component.find('FaLinkedin').length).toEqual(1);
    expect(component.find(`a[href="${ LINKEDIN }"]`).length).toEqual(1);
    expect(component.find(`a[href="${ LINKEDIN }"]`).prop('target')).toEqual('_blank');
  })

  it('should render an avatar image', () => {
    expect(component.find('img[src="/imgs/avatar.jpg"]').length).toEqual(1)
  })

  it('should render my name and title', () => {
    expect(component.find('h1').first().text()).toEqual('Joe Cuffney.')
    expect(component.find('h3').first().text()).toEqual('Sr. Software Engineer.')
  })

  // TODO: how should I test styles in CSS Modules?
  it('should render the correct background image', () => {})
});
