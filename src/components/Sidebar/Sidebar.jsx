import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import SidebarLink from  '../SidebarLink';
import './styles.scss';
import dashboardIcon from '../../static/icons/dashboard_icon.svg';
import conversationsIcon from '../../static/icons/conversations_icon.svg';
import filesboardIcon from '../../static/icons/files_board_icon.svg';
import eventsIcon from '../../static/icons/events_icon.svg';
import sessionsIcon from '../../static/icons/sessions_icon.svg';
import settingsIcon from '../../static/icons/settings_icon.svg';
import Logo from '../../static/icons/logo.svg';

class Sidebar extends React.Component {
  propTypes = {};
  state = {};

  constructor() {
    super();
  }

  get links() {
    return [
      {
        to: '/dashboard',
        label: 'Dashboard',
        icon: dashboardIcon,
      },
      {
        to: '/sessions',
        label: 'sessions',
        icon: sessionsIcon
      },
      {
        to: '/events',
        label: 'events',
        icon: eventsIcon
      },
      {
        to: '/files',
        label: 'Files',
        icon: filesboardIcon
      },
      {
        to: '/conversations',
        label: 'Conversations',
        icon: conversationsIcon
      },
      {
        to: '/Settings',
        label: 'Settings',
        icon: settingsIcon
      },
    ];
  }

  renderLinks() {
    return this.links.map((link, i) => {
      const Icon = link.icon;
      return <SidebarLink
        key={i}
        to={link.to}
        {...this.props}>
        <Icon width={22}/>
      </SidebarLink>;
    });
  }

  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar--logo'>
          <Logo width={'30%'}/>
        </div>
        <nav className='sidebar--nav'>
          {this.renderLinks()}
        </nav>
      </div>
    );
  }
}

export default withRouter(Sidebar);
