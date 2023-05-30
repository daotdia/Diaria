import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

describe('<MainContent />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<MainContent />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
