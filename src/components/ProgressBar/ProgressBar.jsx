
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import {CheckIcon, CancelIcon} from '../Icons';

const ProgressBar = ({percentComplete, handleCancelClick}) => {
  const style = {
    width: `${percentComplete}%`
  }
  return (
    <div className='progress-bar'>
      <div className='progress-bar--place'>
        <div className='progress-bar--fill' style={style}></div>
      </div>
      <div className='progress-bar--icon'>
        {
          percentComplete >= 100
            ?
            <CheckIcon height={14} width={14} fill={'#4192EC'}/>
            :
            <CancelIcon
              height={14}
              width={14}
              fill={'#FF6D4A'}
              onClick={handleCancelClick}
              className='progress-bar--icon-cancel'/>
        }
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  percentComplete: PropTypes.number,
};

export default ProgressBar;
