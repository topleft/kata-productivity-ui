import React from 'react';
import {withRouter} from 'react-router-dom';
import SidebarLink from  '../SidebarLink';
import './styles.scss';

import {
  SessionsIcon,
  DashboardIcon,
  EventsIcon,
  FilesBoardIcon,
  ConversationsIcon,
  SettingsIcon,
  Logo
} from '../Icons';

class Sidebar extends React.PureComponent {

  get links() {
    return [
      {
        to: '/dashboard',
        label: 'Dashboard',
        icon: DashboardIcon,
      },
      {
        to: '/sessions',
        label: 'sessions',
        icon: SessionsIcon
      },
      {
        to: '/',
        label: 'events',
        icon: EventsIcon
      },
      {
        to: '/files',
        label: 'Files',
        icon: FilesBoardIcon
      },
      {
        to: '/conversations',
        label: 'Conversations',
        icon: ConversationsIcon
      },
      {
        to: '/settings',
        label: 'Settings',
        icon: SettingsIcon
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
          <Logo width={'33%'} height={null}/>
        </div>
        <nav className='sidebar--nav'>
          {this.renderLinks()}
        </nav>
      </div>
    );
  }
}

export default withRouter(Sidebar);
