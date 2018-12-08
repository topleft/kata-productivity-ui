import React from 'react';
import {withRouter} from 'react-router-dom';
import SidebarLink from  '../SidebarLink';
import config from '../../config/sidebar';
import './styles.scss';
import { Logo } from '../Icons';


const renderLinks = (props) => {
  return config.map((link, i) => {
    const SidebarIcon = link.icon;
    return <SidebarLink
      key={i}
      to={link.to}
      {...props}>
      <SidebarIcon width={22}/>
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
