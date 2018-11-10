import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import UploadAside from '../UploadAside';

class Aside extends React.Component {
  state = {}
  propTypes = {}

  constructor() {
    super();
  }

  render() {
    return (
      <div className='aside'>
        <UploadAside/>
      </div>
    );
  }

}

export default Aside;
