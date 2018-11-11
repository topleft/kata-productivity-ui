import React from 'react';
import {shallow} from 'enzyme';
import Select from './Select';

describe('Select', () => {
  it('should render', () => {
    const wrapper = shallow(<Select/>);
    expect(wrapper.exists()).toBe(true);
  });
});


