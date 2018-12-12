
import {
  SessionsIcon,
  DashboardIcon,
  EventsIcon,
  FilesBoardIcon,
  ConversationsIcon,
  SettingsIcon,
} from '../components/Icons';

export default [
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
    to: '/Settings',
    label: 'Settings',
    icon: SettingsIcon,
    exact: true,
  },
];
