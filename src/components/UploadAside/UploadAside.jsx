
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {UploadIcon} from '../Icons';
import UploadCard from '../UploadCard';

class UploadAside extends React.Component {
  state = {}
  propTypes = {}

  constructor() {
    super();
  }

  get date() {
    const months = ['January', 'February', 'March' , 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[new Date().getMonth()]} ${new Date().getDate()}`;
  }

  render() {
    return (
      <div className='upload-aside'>
        <div className='upload-aside--header'>
          <UploadIcon width={55} height={55}/>
          <div className='upload-aside--header--text'>
            <h3 className='upload-aside--header--text--title'>Uploader</h3>
            <div className='upload-aside--header--text--date'>{this.date}</div>
          </div>
        </div>
        <UploadCard fileSize={3.2} fileName={'test_image.png'} percentComplete={100}/>
        <UploadCard fileSize={2.9} fileName={'sample_file.pdf'} percentComplete={59}/>
        <UploadCard fileSize={4.12} fileName={'population.csv'} percentComplete={4}/>
      </div>
    );
  }
}

export default UploadAside;
