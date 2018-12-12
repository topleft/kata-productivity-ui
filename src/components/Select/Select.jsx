
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Select extends React.Component {
  state = {
    open: false,
    selected: null,
  }

  propTypes = {
    options: PropTypes.array,
    value: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.string,
    handleSelect: PropTypes.func,
  }

  static defaultProps = {
    width: '100%'
  }

  constructor() {
    super();
  }

  handleSelect(value) {
    this.setState({open: false});
    this.props.handleSelect(value);
  }

  render() {
    const {options, value, displayValue, label, width} = this.props;

    return (
      <div className="select" onClick={() => this.setState({open: !this.state.open})} style={{width: width}}>
        <label className="select--label" id="age-label">{label}</label>
        <div className="select--input">
          <div className="select--combobox" role="combobox" tabIndex="0" aria-autocomplete="none" aria-owns="age-list" aria-expanded="false" aria-labelledby="age-label" aria-required="true" aria-activedescendant="default">
            <div className="select--value">{displayValue || 'Select...'}</div>
          </div>
          <ul className={`select--listbox ${this.state.open ? 'open': ''}`} role="listbox" id="age-list">
            {
              options.map((option, i) => {
                return (
                  <li
                    key={i}
                    className={`select--option ${value === option.value ? 'selected' : null}`}
                    role="option"
                    onClick={() => this.handleSelect(option)}>
                    {option.display}
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default Select;
