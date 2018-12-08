
import {
  SessionsIcon,
  DashboardIcon,
  EventsIcon,
  FilesBoardIcon,
  ConversationsIcon,
  SettingsIcon,
} from '../Components/Icons';

export default [
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
    to: '/events',
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
    to: '/Settings',
    label: 'Settings',
    icon: SettingsIcon
  },
];
