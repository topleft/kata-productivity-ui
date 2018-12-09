
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = (props) => {
  const {
    handleClick,
    children,
    className,
    disabled,
    skinny,
    thick,
    type,
  } = props;

  const buttonClass = `
    button--btn button--${type}
    ${props.icon ? 'button--with-icon' : ''}
    ${skinny ? 'button--skinny' : ''}
    ${thick ? 'button--thick' : ''}
    ${disabled ? 'button--disabled' : ''}
  `;

  return (
    <div className={`button ${className}`}>
      <button className={buttonClass} onClick={disabled ? null : handleClick}>
        {props.icon && <props.icon className={'button--icon'} width={20} height={20}/>}
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
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  icon: PropTypes.element,
  skinny: PropTypes.bool,
  thick: PropTypes.bool,
  type: PropTypes.oneOf(['outline', 'solid', 'text-only'])
};

export default Button;
