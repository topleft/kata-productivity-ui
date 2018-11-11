import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const NumberInput = (props) => {
  const {
    label,
    name,
    value,
    handleChange,
    width
  } = props;
  return (
    <div className='number-input' style={{width: width}}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        value={value}
        onChange={handleChange}
        name={name}
        id={`${name}-id`}
        type="number"/>
      <div className='number-input--buttons'>
        <button className='up' onClick={(e) => handleChange({target:{value: (value||0)+1}})}>+</button>
        <button className='down' onClick={(e) => handleChange({target:{value: (value||0)-1}})}>-</button>
      </div>
    </div>
  );
}

NumberInput.defaultProps = {
  width: '100%'
};
NumberInput.propTypes = {};

export default NumberInput;
