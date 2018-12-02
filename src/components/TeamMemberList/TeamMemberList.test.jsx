import React from 'react';
import {shallow} from 'enzyme';
import TeamMemberList from './TeamMemberList';

describe('TeamMemberList', () => {
  it('should render', () => {
    const wrapper = shallow(<TeamMemberList/>);
    expect(wrapper.exists()).toBe(true);
  });
});

