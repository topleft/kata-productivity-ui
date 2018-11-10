
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
        <h1 className='events--title'>Create Event</h1>
        <div className='events--content'>
          <EventForm/>
        </div>
      </div>
    );
  }
}

export default Events;
