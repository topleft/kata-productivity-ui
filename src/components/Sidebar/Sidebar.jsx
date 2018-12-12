import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import SidebarLink from  '../SidebarLink';
import './styles.scss';
import { Logo } from '../Icons';


const renderLinks = (props) => {
  return props.links.map((link, i) => {
    return <SidebarLink
      key={i}
      {...link}
      {...props}>
      <link.icon width={22}/>
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

Sidebar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      to: PropTypes.string,
      label: PropTypes.string,
      icon: PropTypes.element,
    })
  ).isRequired
};

export default withRouter(Sidebar);
