import React from 'react';
import {shallow} from 'enzyme';
import NumberInput from './NumberInput';

describe('NumberInput', () => {
  it('should render', () => {
    const wrapper = shallow(<NumberInput/>);
    expect(wrapper.exists()).toBe(true);
  });
});

