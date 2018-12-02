import React from 'react';
import {shallow} from 'enzyme';
import ContentContainer from './ContentContainer';

describe('ContentContainer', () => {
  it('should render', () => {
    const wrapper = shallow(<ContentContainer/>);
    expect(wrapper.exists()).toBe(true);
  });
});

