import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class TextInput extends React.PureComponent {
  static defaultProps = {
    type: 'no-outline',
    validator: () => ({isValid: true, error: null}),
  }
  state = {
    isValid: true
  }
  constructor() {
    super();
  }

  validate() {
    const {
      validator,
      value
    } = this.props;
    const result = validator(value);
    this.setState(result);
  }

  handleChange(e) {
    this.setState({isValid: true}, this.props.handleChange(e));
  }

  render() {

    const {
      label,
      name,
      placeholder,
      value,
      type,
      icon,
      button,
      buttonProps,
    } = this.props;
    const Icon = icon;
    const Button = button;
    const {
      error,
      isValid
    } = this.state;

    return (
      <div className={`text-input text-input-${type}`}>
        {label && <label htmlFor={`${name}-id`}>{label}</label>}
        {Icon && <span className='text-input--icon'><Icon width={22}/></span>}
        <input
          className={icon ? 'withIcon' : ''}
          name={name}
          onChange={(e) => this.handleChange(e)}
          onBlur={() => this.validate()}
          // onFocus={() => this.setState({isValid: true})}
          placeholder={placeholder}
          type="text"
          id={`${name}-id`}
          value={value} />
        {Button && <span className='text-input--button'><Button skinny {...buttonProps}/></span>}
        {!isValid ? <span className='text-input--error-message'>{error || 'Invalid'}</span> : null}
      </div>
    );
  }
}

TextInput.defaultProps = {
  type: 'no-outline',
  validator: () => ({isValid: true, error: null}),
};

TextInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  button: PropTypes.element,
  icon: PropTypes.any,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default TextInput;
