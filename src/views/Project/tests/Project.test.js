import React from 'react';
import { shallow } from 'enzyme';

// NOTE: seems like this seems to need to be before the import
jest.mock('projects', () => ({
  projects: [
    {
      slug: 'slug',
      src: '/imgs/work/test.jpg',
      title: 'Title',
      to: 'https://google.com',
    },
  ],
}));

import Project from '..';

describe('Project', () => {

  let props;
  beforeEach(() => {
    const slug = 'slug';
    props = {
      match: {
        params: {
          slug,
        },
      },
      location: {
        pathname: `/work/${ slug }`,
      },
    };
  });

  let component;
  beforeEach(() => {
    component = shallow(
      <Project { ...props } />
    );
  });

  it('should contain a back button', () => {
    expect(component.find('FaArrowLeft').length).toEqual(1);
  });

  it('should render my name and title', () => {
    expect(component.find('h1').first()
      .text()).toEqual('<FaArrowLeft />Title.');
  });

  it('should redirect to `/not-found` when project key not found', () => {
    props = { ...props, match: { params: { slug: 'non-existant-slug' } } };
    component = shallow(<Project { ...props } />);
    expect(component.find('Redirect').length).toEqual(1);
    expect(component.find('Redirect').first()
      .prop('to')).toBe('/not-found');
  });
});
