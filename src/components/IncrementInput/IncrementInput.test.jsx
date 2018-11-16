import React from 'react';
import {shallow} from 'enzyme';
import IncrementInput from './IncrementInput';

describe('IncrementInput', () => {
  it('should render', () => {
    const wrapper = shallow(<IncrementInput/>);
    expect(wrapper.exists()).toBe(true);
  });
});

