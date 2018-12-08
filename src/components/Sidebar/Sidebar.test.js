import React from 'react';
import {shallow} from 'enzyme';
import Sidebar from './Sidebar';
import sidebarConfig from '../../config/sidebar.js';
import sidebar from '../../config/sidebar.js';

describe('Sidebar', () => {

  it('should render', () => {
    const wrapper = shallow(<Sidebar/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render links', () => {
    const wrapper = shallow(<Sidebar.WrappedComponent links={sidebarConfig}/>);
    expect(wrapper.find('SidebarLink').length).toBe(sidebarConfig.length);

    const newConfig = sidebarConfig.slice(0, 2);
    wrapper.setProps({links: newConfig});
    expect(wrapper.find('SidebarLink').length).toBe(newConfig.length);
  });
});
