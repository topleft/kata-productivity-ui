
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const DateInput = (props) => {
  const {
    date,
    focused,
    handleDateChange,
    handleFocusChange,
    label,
  } = props;

  return (
    <div className={`date-input ${focused ? 'focused' : ''}`}>
      <label className='date-input--label' htmlFor="date-picker">{label}</label>
      <SingleDatePicker
        showDefaultInputIcon
        inputIconPosition='after'
        date={date}
        onDateChange={date => handleDateChange(date)}
        focused={focused}
        onFocusChange={({ focused }) => handleFocusChange(focused)}
        id="date-picker"
      />
    </div>
  );
};

DateInput.propTypes = {};

export default DateInput;
