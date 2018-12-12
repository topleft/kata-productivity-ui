
import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import './styles.scss';

const SidebarLink = (props) => {
  const {to, children, exact} = props;
  return (
    <div className='sidebar-link'>
      <NavLink to={to} exact={exact}>
        <span className='sidebar-link--label'>{children}</span>
      </NavLink>
    </div>
  );
};

SidebarLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  to: PropTypes.string.isRequired,
};

export default SidebarLink;
