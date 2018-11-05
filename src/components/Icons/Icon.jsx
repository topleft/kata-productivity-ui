import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({
  children,
  className,
  fill,
  height,
  width,
  stroke,
  title,
  viewBox}) => {
  return (
    <svg
      aria-labelledby={`${title}-id`}
      className={className}
      fill={fill}
      height={height}
      stroke={stroke}
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
  height: PropTypes.number,
  stroke: PropTypes.string,
  title: PropTypes.string,
  viewBox: PropTypes.string,
  width: PropTypes.number,
};

Icon.defaultProps = {
  fill: 'currentColor',
  height: '20',
  stroke: 'currentColor',
  width: '20',
};

export default Icon;
