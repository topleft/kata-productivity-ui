
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TextInput from '../TextInput';
import Button from '../Button';
import Select from '../Select';
import NumberInput from '../NumberInput';

class EventForm extends React.Component {
  state = {
    title: '',
    location: '',
    duration: null,
  }
  propTypes = {}
  durationOptions = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
  ]

  constructor() {
    super();
  }

  render() {
    const {
      title,
      location,
      duration,
      hour,
      minute
    } = this.state;

    const titleButtonProps = {
      children: '+ Add description',
      type: 'outline'
    }

    const locationButtonProps = {
      children: '+ Set meetings room',
      type: 'outline'
    }
    return (
      <div className='event-form'>
        <div className='event-form--main'>
          <div className='event-form--line'>
            <TextInput
              button={Button}
              buttonProps={titleButtonProps}
              label='title'
              name='title'
              placeholder='Enter a title...'
              type='outline'
              value={title}
              handleChange={(e) => this.setState({title: e.target.value})}/>
          </div>
          <div className='event-form--line'>
            <NumberInput
              name='hour'
              width={'90px'}
              label={'Hour'}
              value={hour}
              handleChange={(e) => this.setState({hour: e.target.value})}/>
            <NumberInput
              name='minute'
              width={'90px'}
              label={'Minute'}
              value={minute}
              handleChange={(e) => this.setState({minute: e.target.value})}/>
            <Select
              width={'40%'}
              options={this.durationOptions}
              label={'Duration'}
              value={duration}
              handleSelect={(value) => this.setState({duration: value})}/>
          </div>
          <div className='event-form--line'>
            <TextInput
              button={Button}
              buttonProps={locationButtonProps}
              label='location'
              name='location'
              placeholder='Enter a location...'
              type='outline'
              value={location}
              handleChange={(e) => this.setState({location: e.target.value})}/>
          </div>
        </div>
        <div className='event-form--side'>
          Side
        </div>
      </div>
    );
  }
}

export default EventForm;
