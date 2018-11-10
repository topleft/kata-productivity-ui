import React from 'react';
import Icon from './Icon';


const CancelIcon = (props) => {

  props.stroke = null; // this icon only uses fill

  return (
    <Icon viewBox="0 0 11 11" {...props}>
      <path d="M7.717 9.352L5.53 7.24 3.42 9.426a1.23 1.23 0 1 1-1.77-1.71l2.11-2.185L1.573 3.42a1.23 1.23 0 0 1 1.71-1.77L5.47 3.76l2.112-2.186a1.23 1.23 0 1 1 1.77 1.71L7.24 5.47l2.187 2.112a1.23 1.23 0 0 1-1.71 1.77z"/>
    </Icon>
  );
};

CancelIcon.defaultProps = {
  title: 'CancelIcon'
};

export default CancelIcon;
