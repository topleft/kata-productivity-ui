
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import EventForm from '../EventForm';

class Events extends React.Component {
  state = {}
  propTypes = {}

  constructor() {
    super();
  }

  render() {
    return (
      <div className='events'>
        <EventForm/>
      </div>
    );
  }
}

export default Events;
