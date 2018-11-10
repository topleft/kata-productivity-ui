import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextInput = (props) => {
  const {
    label,
    name,
    placeholder,
    value,
    type,
    handleChange,
    icon,
    button,
    buttonProps,
  } = props;

  const Icon = icon;
  const Button = button;

  return (
    <div className={`text-input text-input-${type}`}>
      {label && <label htmlFor={name}>{label}</label>}
      {Icon && <span className='text-input--icon'><Icon width={22}/></span>}
      <input
        className={icon ? 'withIcon' : ''}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value} />

      {Button && <span className='text-input--button'><Button skinny {...buttonProps}/></span>}
    </div>
  );
};

TextInput.defaultProps = {
  type: 'no-outline',
};

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default TextInput;
