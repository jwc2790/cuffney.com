import React from 'react';
import { shallow } from 'enzyme';

import Resume from '..';

describe('Resume', () => {

  const RESUME_URL = 'https://resume.cuffney.com/resume.pdf';
  const RESUME_IFRAME = 'https://resume.cuffney.com';

  let props;
  beforeEach(() => {
    props = {
      location: {
        pathname: '/resume',
      },
    };
  });

  let component;
  beforeEach(() => {
    component = shallow(
      <Resume { ...props } />
    );
  });

  it('should contain Nav', () => {
    expect(component.find('Nav').length).toEqual(1);
  });

  it('should render Resume Page Title', () => {
    expect(component.find('h1').first()
      .text()).toEqual('Resume.');
  });

  it('should render a link to download resume', () => {
    expect(component.find(`a[href="${ RESUME_URL }"]`).length).toEqual(1);
    expect(component.find(`a[href="${ RESUME_URL }"]`).first()
      .text()).toEqual('Download PDF');
  });

  it('should contain an iframe a link to download resume', () => {
    expect(component.find(`iframe[src="${ RESUME_IFRAME }"]`).length).toEqual(1);
  });
});
