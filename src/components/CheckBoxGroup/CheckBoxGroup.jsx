
import React from 'react';
import PropTypes from 'prop-types';
import {CircleCheckIcon} from '../Icons';
import './styles.scss';

class CheckBoxGroup extends React.Component {
  state = {}
  propTypes = {}

  constructor() {
    super();
  }

  renderCheckBoxes() {
    return this.props.options.map((box, i) => {
      return (
        <div className='checkbox-group--options--option' key={i}>
          <label htmlFor={box.name}>
            <input type="checkbox" id={box.name} name={box.name}/>
            <CircleCheckIcon className={'check'} height={'15'}/>
            {box.label}
          </label>
        </div>
      );
    })
  }

  render() {
    const {
      label
    } = this.props;
    return (
      <div className='checkbox-group'>
        <p className='checkbox-group--label'>{label}</p>
        <div className='checkbox-group--options checkbox-group--options-horizontal'>
          {this.renderCheckBoxes()}
        </div>
      </div>
    );
  }
}

CheckBoxGroup.propTypes = {
  options: PropTypes.array,
  label: PropTypes.string
}


export default CheckBoxGroup;
