
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = (props) => {
  const {
    handleClick,
    children,
    className,
    icon,
    skinny,
    thick,
    type,
  } = props;

  const Icon = icon; // needs to be a capitalized for react to know it is a component
  const buttonClass = `
    button--btn button--${type}
    ${Icon ? 'button--with-icon' : ''}
    ${skinny ? 'button--skinny' : ''}
    ${thick ? 'button--thick' : ''}
  `;

  return (
    <div className={`button ${className}`}>
      <button className={buttonClass} onClick={handleClick}>
        {Icon && <Icon className={'button--icon'} width={20} height={20}/>}
        {children}
      </button>
    </div>
  );
};

Button.defaultProps = {
  type: 'solid',
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  handleClick: PropTypes.func,
  icon: PropTypes.element,
  skinny: PropTypes.bool,
  type: PropTypes.oneOf(['outline', 'solid', 'text-only'])
};

export default Button;
