import React from 'react';
import {withRouter} from 'react-router-dom';
import SidebarLink from  '../SidebarLink';
import sidebarConfig from '../../config/sidebar.js';
import './styles.scss';
import { Logo } from '../Icons';

const renderLinks = (props) => {
  return sidebarConfig.map((link, i) => {
    const Icon = link.icon;
    return <SidebarLink
      key={i}
      to={link.to}
      {...props}>
      <Icon width={22}/>
    </SidebarLink>;
  });
};

const Sidebar = (props) => {

  return (
    <div className='sidebar'>
      <div className='sidebar--logo'>
        <Logo width={'33%'} height={null}/>
      </div>
      <nav className='sidebar--nav'>
        {renderLinks(props)}
      </nav>
    </div>
  );
};

export default withRouter(Sidebar);
