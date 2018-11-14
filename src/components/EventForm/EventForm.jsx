
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TextInput from '../TextInput';
import Button from '../Button';
import Select from '../Select';
import NumberInput from '../NumberInput';
import DateInput from '../DateInput';

class EventForm extends React.Component {
  state = {
    title: '',
    location: '',
    duration: null,
    hour: 0,
    minute: 0,
    date: null,
    dateFocused: false
  }
  propTypes = {}
  durationOptions = [
    {label: '1', value: '1'},
    {label: '2', value: '2'},
  ]

  constructor() {
    super();
  }

  handleIncrement(e, name, sign) {
    const val = sign === '+' ? 1 : -1;
    this.setState((state) => {
      const current = state[name];
      return {[name]: current + val};
    });
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
            <div className='event-form--line--item'>
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
          </div>
          <div className='event-form--line'>
            <div className='event-form--line--item' style={{width: '35%'}}>
              <DateInput
                label={'Date'}
                date={this.state.date}
                focused={this.state.dateFocused}
                handleDateChange={date => this.setState({ date })}
                handleFocusChange={focused => this.setState({ dateFocused: focused })} />
            </div>
            <div className='event-form--line--item' style={{width: '20%'}}>
              <NumberInput
                name='hour'
                label={'Hour'}
                value={hour}
                handleIncrement={(e, name, sign) => this.handleIncrement(e, name, sign)}
                handleChange={(e) => this.setState({hour: e.target.value})}/>
            </div>
            <div className='event-form--line--item' style={{width: '20%'}}>
              <NumberInput
                name='minute'
                label={'Minute'}
                value={minute}
                handleIncrement={(e, name, sign) => this.handleIncrement(e, name, sign)}
                handleChange={(e) => this.setState({minute: e.target.value})}/>
            </div>
            <div className='event-form--line--item' style={{width: '25%'}}>
              <Select
                options={this.durationOptions}
                label={'Duration'}
                value={duration}
                handleSelect={(value) => this.setState({duration: value})}/>
            </div>
          </div>
          <div className='event-form--line'>
            <div className='event-form--line--item'>
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
        </div>
        <div className='event-form--side'>
          Side
        </div>
      </div>
    );
  }
}

export default EventForm;
