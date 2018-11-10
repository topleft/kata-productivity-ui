
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TextInput from '../TextInput';
import Button from '../Button';

class EventForm extends React.Component {
  state = {
    title: ''
  }
  propTypes = {}

  constructor() {
    super();
  }

  render() {
    const {title} = this.state;
    const buttonProps = {
      children: '+ Add Description',
      type: 'outline'
    }
    return (
      <div className='event-form'>
        <div className='event-form--main'>
          <TextInput
            button={Button}
            buttonProps={buttonProps}
            type='outline'
            value={title}
            name='title'
            label='title'
            handleChange={(e) => this.setState({title: e.target.value})}/>
        </div>
        <div className='event-form--side'>
          Side
        </div>
      </div>
    );
  }
}

export default EventForm;
