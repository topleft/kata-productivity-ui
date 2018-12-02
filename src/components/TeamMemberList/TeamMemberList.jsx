
import React from 'react';
import PropTypes from 'prop-types';
import {CircleCheckIcon, PaperPlaneIcon} from '../Icons';
import Button from '../Button';
import './styles.scss';

const teamMembers = [
  {initials: 'PJ', color: 'yellow'},
  {initials: 'AJ', color: 'red'},
  {initials: 'TC', color: 'blue'}
];

class TeamMemberList extends React.Component {
  state = {}
  propTypes = {}

  constructor() {
    super();
  }

  renderMemberIcons() {
    const colors = ['red', 'blue', 'yellow'];
    const initials = teamMembers.map((member, i) => {
      const color = colors[i%colors.length];
      return (
        <div key={i} className={`initials--box initials--box-${color}`}>
          <span>{member.initials}</span>
          <CircleCheckIcon height='14' width='14' className={'icon'}/>
        </div>
      );
    });
    return (
      <div className='initials'>
        {initials}
        <Button
          type='outline'
          handleClick={() => console.log('CLICK: invite button')}
          icon={PaperPlaneIcon}>
          +
        </Button>
      </div>
    );
  }

  render() {
    return (
      <div className='team-member-list'>
        <p className='team-member-list--title'>Add Team Members</p>
        {this.renderMemberIcons()}

      </div>
    );
  }
}

// const TeamMemberList = () => {
//   return <div className='TeamMemberList'></div>;
// }

// TeamMemberList.propTypes = {};

export default TeamMemberList;
