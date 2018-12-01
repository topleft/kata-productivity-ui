import React from 'react';
import {shallow} from 'enzyme';
import FileUploader from './FileUploader';

describe('FileUploader', () => {
  it('should render', () => {
    const wrapper = shallow(<FileUploader/>);
    expect(wrapper.exists()).toBe(true);
  });
});


