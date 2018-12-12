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
        exact: true,
      },
      {
        to: '/sessions',
        label: 'sessions',
        icon: SessionsIcon,
        exact: true,
      },
      {
        to: '/',
        label: 'events',
        icon: EventsIcon,
        exact: true,
      },
      {
        to: '/files',
        label: 'Files',
        icon: FilesBoardIcon,
        exact: true,
      },
      {
        to: '/conversations',
        label: 'Conversations',
        icon: ConversationsIcon,
        exact: true,
      },
      {
        to: '/settings',
        label: 'Settings',
        icon: SettingsIcon,
        exact: true,
      },
    ];
  }

  renderLinks() {
    return this.links.map((link, i) => {
      const Icon = link.icon;
      return <SidebarLink
        key={i}
        {...link}
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
