import React from 'react';
import { shallow, mount, render } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import Search from '../components/Search';

import * as actions from '../actions/weather';
import * as types from '../config/constants';
import getWeatherMock from './mocks/getWeatherMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Search', () => {
  it('Should render', () => {
    expect(shallow(<Search />).exists()).toBe(true)
  });

  it('Should update state when input typed in', () => {
    const search = shallow(<Search />);
    const searchField = search.find('input').at(0);
    
    expect(search.state().city).toEqual('');
    searchField.simulate('change', { target: { value: 'London' } });
    expect(search.state().city).toEqual('London');
  });

  it('Should how current location if one is passed in props', () => {
    const search = shallow(<Search location="London" />);
    const searchField = search.find('input').at(0);

    expect(searchField.props().placeholder).toEqual('London');
  });
});

describe('Search actions', () => {
  beforeEach(function () {
    moxios.install();
  });

  afterEach(function () {
    moxios.uninstall();
  });
   
  it('should return data for a valid city', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getWeatherMock,
      });
    });

    const expectedActions = [
      { type: types.GET_WEATHER_BEGIN },
      { type: types.GET_WEATHER_SUCCESS, weather: getWeatherMock },
    ];

    const store = mockStore({ weather: {} })

    return store.dispatch(actions.searchWeather('London')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
   
  it('should return an error for an invalid city', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: getWeatherMock,
      });
    });

    const expectedActions = [
      { type: types.GET_WEATHER_BEGIN },
      { type: types.GET_WEATHER_ERROR, message: 'Could not fetch weather for that location' },
    ];

    const store = mockStore({ weather: {} })

    return store.dispatch(actions.searchWeather('xyz')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
