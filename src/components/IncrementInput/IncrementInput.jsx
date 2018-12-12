import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const IncrementInput = (props) => {
  const {
    label,
    name,
    placeholder,
    value,
    handleChange,
    handleIncrement,
    width
  } = props;

  return (
    <div className='increment-input' style={{width: width}}>
      {label && <label htmlFor={`${name}-id`}>{label}</label>}
      <input
        value={value}
        onChange={handleChange}
        name={name}
        id={`${name}-id`}
        placeholder={placeholder}
        type="text"/>
      <div className='increment-input--buttons'>
        <button className='up' onClick={() => handleIncrement('+')}>+</button>
        <button className='down' onClick={() => handleIncrement('-')}>-</button>
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
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  handleIncrement: PropTypes.func,
  width: PropTypes.string,
};

export default IncrementInput;
