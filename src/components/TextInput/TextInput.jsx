
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import InlineSVG from 'svg-inline-react';
import SearchIcon from '../../static/icons/search_icon.svg';

const TextInput = (props) => {
  const {
    label,
    name,
    placeholder,
    value,
    handleChange,
    icon,
  } = props;

  const Icon = icon;

  return (
    <div className='text-input'>
      {Icon && <span className='text-input--icon'><Icon width={16}/></span>}
      <input
        className={icon ? 'withIcon' : ''}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type="text"
        value={value} />
      {label && <label htmlFor={name}>{label}</label>}
    </div>
  );
};

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  icon: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
}

export default TextInput;
