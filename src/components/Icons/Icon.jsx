import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  children,
  className,
  fill,
  fillOpacity,
  height,
  width,
  stroke,
  strokeWidth,
  title,
  viewBox}) => {
  return (
    <svg
      aria-labelledby={`${title}-id`}
      className={className}
      fill={fill}
      fillOpacity={fillOpacity}
      height={height}
      stroke={stroke}
      strokeWidth={strokeWidth}
      viewBox={viewBox}
      width={width}
      xmlns='http://www.w3.org/2000/svg'>
      <title id={`${title}-id`}>{title}</title>
      {children}
    </svg>
  );
};

Icon.propTypes = {
  children: PropTypes.element,
  className: PropTypes.string,
  fill: PropTypes.string,
  fillOpacity: PropTypes.number,
  height: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
  stroke: PropTypes.string,
  strokeWidth: PropTypes.number,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.oneOfType(PropTypes.number, PropTypes.string),
};

Icon.defaultProps = {
  fill: 'currentColor',
  height: '20',
  stroke: 'currentColor',
  strokeWidth: 1,
  width: '20',
};

export default Icon;
