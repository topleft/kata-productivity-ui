import React from 'react';
import Icon from './Icon';


const CheckIcon = (props) => {

  props.stroke = null; // this icon only uses fill

  return (
    <Icon viewBox="0 0 12 11" {...props}>
      <path d="M5.577 9.577c-.467.564-1.224.564-1.69 0L1.35 6.52c-.467-.562-.467-1.476 0-2.038.467-.564 1.224-.564 1.69 0l1.692 2.038L8.96 1.423c.467-.564 1.224-.564 1.69 0 .468.562.468 1.475 0 2.038L5.577 9.577z"/>
    </Icon>
  );
};

CheckIcon.defaultProps = {
  title: 'CheckIcon'
};

export default CheckIcon;
