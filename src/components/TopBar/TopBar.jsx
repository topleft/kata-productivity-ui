
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TextInput from '../TextInput';
import searchIcon from '../../static/icons/search_icon.svg';

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
            icon={searchIcon}/>
        </div>
      </div>
    );
  }
}

TopBar.propTypes = {};

export default TopBar;
