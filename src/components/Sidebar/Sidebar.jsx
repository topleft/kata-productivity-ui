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

const pathPrefix = process.env.PATH_PREFIX || '';

class Sidebar extends React.PureComponent {

  get links() {
    return [
      {
        to: `${pathPrefix}/dashboard`,
        label: 'Dashboard',
        icon: DashboardIcon,
      },
      {
        to: `${pathPrefix}/sessions`,
        label: 'sessions',
        icon: SessionsIcon
      },
      {
        to: `${pathPrefix}/events`,
        label: 'events',
        icon: EventsIcon
      },
      {
        to: `${pathPrefix}/files`,
        label: 'Files',
        icon: FilesBoardIcon
      },
      {
        to: `${pathPrefix}/conversations`,
        label: 'Conversations',
        icon: ConversationsIcon
      },
      {
        to: `${pathPrefix}/settings`,
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
