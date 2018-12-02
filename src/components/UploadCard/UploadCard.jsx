
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import ProgressBar from '../ProgressBar';

const UploadCard = (props) => {
  const {
    percentComplete,
    fileName,
    fileLink,
    fileSize,
  } = props;

  return (
    <div className='upload-card'>
      <ProgressBar percentComplete={percentComplete}/>
      <div className='upload-card--file-size'>
        {fileSize}
        <span className='upload-card--unit'>&nbsp;MB</span>
      </div>
      <div className='upload-card--file-name'>
        {fileName}
      </div>
      <div className={`upload-card--link ${percentComplete < 100 ? 'incomplete' : ''}`}>
        <a href={fileLink} target='_blank' rel='noopener noreferrer'>View File</a>
      </div>
    </div>
  );
};

UploadCard.propTypes = {
  percentComplete: PropTypes.number,
  fileSize: PropTypes.number,
  fileSizeUnit: PropTypes.string,
  fileName: PropTypes.string,
  fileLink: PropTypes.string,
};

export default UploadCard;
