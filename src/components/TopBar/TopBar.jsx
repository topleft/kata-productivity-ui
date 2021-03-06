
import React from 'react';
import './styles.scss';
import TextInput from '../TextInput';
import Button from '../Button';
import profile_pic from '../../static/profile_pic.png';
import {PaperPlaneIcon, SearchIcon} from '../Icons';

class TopBar extends React.Component {
  state = {
    searchValue: '',
  };
  propTypes = {};

  render() {
    const {searchValue} = this.state;
    return (
      <div className='top-bar'>
        <div className='top-bar--search'>
          <TextInput
            name='search'
            placeholder='Find a user team, user, meeting...'
            value={searchValue}
            handleChange={(e) => this.setState({searchValue: e.target.value})}
            icon={SearchIcon}/>
        </div>
        <div className='top-bar--right-side'>
          <Button
            type='outline'
            handleClick={() => console.log('CLICK: invite button')}
            icon={PaperPlaneIcon}>
            Invite
          </Button>
          <div className='top-bar--avatar'>
            <img src={profile_pic} alt=""/>
          </div>

        </div>
      </div>
    );
  }
}

TopBar.propTypes = {};

export default TopBar;
