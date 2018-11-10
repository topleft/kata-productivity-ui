import React from 'react';
import {shallow} from 'enzyme';
import UploadAside from './UploadAside';

describe('UploadAside', () => {
  it('should render', () => {
    const wrapper = shallow(<UploadAside/>);
    expect(wrapper.exists()).toBe(true);
  });
});



