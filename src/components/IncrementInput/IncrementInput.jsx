import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const IncrementInput = (props) => {
  const {
    label,
    name,
    value,
    handleChange,
    handleIncrement,
    width
  } = props;

  return (
    <div className='increment-input' style={{width: width}}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        value={value}
        onChange={handleChange}
        name={name}
        id={`${name}-id`}
        type="text"/>
      <div className='increment-input--buttons'>
        <button className='up' onClick={(e) => handleIncrement(e, name, '+')}>+</button>
        <button className='down' onClick={(e) => handleIncrement(e, name, '-')}>-</button>
      </div>
    </div>
  );
};

IncrementInput.defaultProps = {
  width: '100%'
};

IncrementInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleIncrement: PropTypes.func,
  width: PropTypes.string,
};

export default IncrementInput;
