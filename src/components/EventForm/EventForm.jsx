
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import TextInput from '../TextInput';
import Button from '../Button';
import Select from '../Select';
import NumberInput from '../NumberInput';
import IncrementInput from '../IncrementInput';
import DateInput from '../DateInput';
import FileUploader from '../FileUploader';
import {CircleCheckIcon} from '../Icons';
import moment from 'moment';

const hours = [ '12 am', '1 am', '2 am', '3 am', '4 am', '5 am', '6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm', '10 pm', '11 pm',]

class EventForm extends React.Component {
  state = {
    title: '',
    location: '',
    duration: null,
    hourIndex: 8,
    hourValue: hours[8],
    minute: '0m',
    date: null,
    dateFocused: false,

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

  handleHourIncrement(sign) {
    const val = sign === '+' ? 1 : -1;
    this.setState((state) => {
      const current = state['hourIndex'];
      let newIndex = current + val;
      newIndex = newIndex > 23 ? 0 : newIndex < 0 ? 23 : newIndex;
      return {hourValue: hours[newIndex], hourIndex: newIndex};
    });
  }

  handleMinIncrement(sign) {
    const val = sign === '+' ? 1 : -1;
    this.setState((state) => {
      const current = +state['minute'].replace('m', '');
      let newValue = current + val;
      if (newValue == 60) {
        newValue = 0;
        this.handleHourIncrement('+');
      } else if (newValue < 0) {
        newValue = 59;
        this.handleHourIncrement('-');
      }
      return {minute: `${newValue}m`};
    });
  }

  handleHourChange(e) {
    const {value} = e.target;
    // @TODO
    // const regex = \^[1-12] (am|pm)$\
    // if value meets regex set state
    this.setState({hourValue: value});
  }

  handleMinChange(e) {
    const {value} = e.target;
    // @TODO
    // const regex = \^[1-12] (m)$\
    // if value meets regex set state
    this.setState({hourValue: value});
  }

  renderTimeSentence() {
    const {date, hourValue, minute} = this.state;
    if (!date) return;
    const hour = hourValue.replace(/ am| pm/, '')
    const amPm = hourValue.slice(-2);
    let minutes = minute.replace('m', '');
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const startTime = `${hour}:${minutes}${amPm}`;
    const sentence = `This event will take place on the ${date.format('Do')} of ${date.format('MMM')} starting at ${startTime}`;
    return (
      <div className='summary-message'>
        <CircleCheckIcon width={15} height={15}/>
        <span>{sentence}</span>
      </div>
    );
  }

  render() {
    const {
      title,
      location,
      duration,
      hourValue,
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
              <IncrementInput
                name='hour'
                label={'Hour'}
                value={hourValue}
                handleIncrement={(e, name, sign) => this.handleHourIncrement(sign)}
                handleChange={(e) => this.handleHourChange(e)}/>
            </div>
            <div className='event-form--line--item' style={{width: '20%'}}>
              <IncrementInput
                name='minute'
                label={'Minute'}
                value={minute}
                handleIncrement={(e, name, sign) => this.handleMinIncrement(sign)}
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
              {this.renderTimeSentence()}
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
          <div className='event-form--line'>
            <div className='event-form--line--item'>
              <FileUploader/>
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
