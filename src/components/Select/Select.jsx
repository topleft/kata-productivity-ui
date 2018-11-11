
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class __Template extends React.Component {
  state = {
    open: false,
    selected: null,
  }
  propTypes = {}

  constructor() {
    super();
  }

  handleSelect(value) {
    this.setState({open: false});
    this.props.handleSelect(value);
  }

  render() {
    const {options, value, label} = this.props;

    return (
      <div className="select" onClick={() => this.setState({open: !this.state.open})}>
        <div className="select--label" id="age-label">{label}</div>
        <div className="select--input">
          <div className="select--combobox" role="combobox" tabIndex="0" aria-autocomplete="none" aria-owns="age-list" aria-expanded="false" aria-labelledby="age-label" aria-required="true" aria-activedescendant="default">
            <div className="select--value">{value || 'Select...'}</div>
          </div>
          <ul className={`select--listbox ${this.state.open ? 'open': ''}`} role="listbox" id="age-list">
            {
              options.map((option, i) => {
                return (
                  <li
                    key={i}
                    className="select--option"
                    role="option"
                    onClick={() => this.handleSelect(option.value)}>
                    {option.label}
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

export default __Template;
