import React from 'react';
import Icon from './Icon';


const CancelIcon = (props) => {

  props.stroke = null; // this icon only uses fill

  return (
    <Icon viewBox="0 0 11 11" {...props}>
      <g fill="none" fillRule="evenodd">
        <circle fill={props.circleFillColor} cx="5.376" cy="5.376" r="5.376" />
        <path d="M5.149 7.318a.642.642 0 0 1-.91 0L2.877 5.955a.643.643 0 0 1 .909-.91l.91.91 2.271-2.272a.642.642 0 1 1 .909.908L5.149 7.318z"
          fill={props.checkFillColor} />
      </g>
    </Icon>
  );
};

CancelIcon.defaultProps = {
  title: 'CircleCheckIcon',
  checkFillColor: '#FFF',
  circleFillColor: '#97C66B'
};

export default CancelIcon;
