
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = (props) => {
  const {
    handleClick,
    children,
    icon,
    type,
  } = props;

  const Icon = icon;

  return (
    <div className={`button`}>
      <button className={`button--btn button--${type} ${Icon ? 'button--with-icon' : ''}`} onClick={handleClick}>
        {Icon && <Icon className={'button--icon'} width={20}/>}
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
  handleClick: PropTypes.func,
  icon: PropTypes.element,
  type: PropTypes.oneOf(['outline', 'solid'])
};

export default Button;
