
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = (props) => {
  const {
    handleClick,
    children,
    icon
  } = props;
  const Icon = icon;
  return (
    <div className='button'>
      <button className={Icon ? 'with-icon' : ''} onClick={handleClick}>
        {Icon && <Icon className={'button--icon'} width={20}/>}
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {};

export default Button;
