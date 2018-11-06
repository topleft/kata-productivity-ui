import React from 'react';
import Icon from './Icon';


const DashboardIcon = (props) => {
  props.stroke = null; // this icon only uses fill
  return (
    <Icon viewBox="0 0 23 22" {...props}>
      <g>
        <path d="M1.969 6.666l9.514 3.607 9.515-3.607-9.515-3.606L1.97 6.666zm9.514 4.666a.532.532 0 0 1-.189-.034L.334 7.143A.512.512 0 0 1 0 6.666c0-.211.132-.4.333-.477l10.961-4.155a.539.539 0 0 1 .378 0l10.96 4.155a.513.513 0 0 1 .334.477c0 .211-.132.4-.333.477l-10.961 4.155a.531.531 0 0 1-.189.034z" />
        <path d="M11.483 15.807a.531.531 0 0 1-.188-.035L.334 11.618A.513.513 0 0 1 0 11.14c0-.21.133-.4.334-.477l5.48-2.077a.526.526 0 0 1 .675.292.508.508 0 0 1-.298.662l-4.223 1.6 9.515 3.607 9.515-3.607-4.223-1.6a.508.508 0 0 1-.298-.662.526.526 0 0 1 .675-.292l5.48 2.077a.513.513 0 0 1 .334.477c0 .212-.132.4-.333.478L11.67 15.772a.531.531 0 0 1-.188.035" />
        <path d="M11.483 19.897a.531.531 0 0 1-.188-.034L.334 15.708A.513.513 0 0 1 0 15.231c0-.21.133-.4.334-.477l5.22-1.981a.525.525 0 0 1 .675.292.51.51 0 0 1-.299.662L1.968 15.23l9.515 3.607 9.515-3.607-3.962-1.504a.51.51 0 0 1-.298-.662.526.526 0 0 1 .675-.292l5.22 1.981a.513.513 0 0 1 .333.477c0 .211-.132.4-.333.477L11.67 19.863a.531.531 0 0 1-.188.034" />
      </g>
    </Icon>
  );
};

DashboardIcon.defaultProps = {
  title: 'DashboardIcon'
};

export default DashboardIcon;