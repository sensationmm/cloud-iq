import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import Result from '../components/Result';

describe('Result', () => {
  it('Should render', () => {
    expect(shallow(<Result />).exists()).toBe(true)
  });

  it('Should render data as expected', () => {
    const result = shallow(<Result location='London' />);

     const headingTag = result.find('h2');

     expect(headingTag.text()).toBe('Results for London');
  });
});
