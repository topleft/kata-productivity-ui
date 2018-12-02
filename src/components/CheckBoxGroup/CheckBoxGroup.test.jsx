import React from 'react';
import {shallow} from 'enzyme';
import CheckBoxGroup from './CheckBoxGroup';

describe('CheckBoxGroup', () => {
  it('should render', () => {
    const wrapper = shallow(<CheckBoxGroup/>);
    expect(wrapper.exists()).toBe(true);
  });
});

