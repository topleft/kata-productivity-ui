import React from 'react';
import {shallow} from 'enzyme';
import IncrementInput from './IncrementInput';

describe('TextInput', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      name: 'test',
      value: '',
      handleChange: jest.fn(),
      handleIncrement: jest.fn(),
      placeholder: 'hold the place',
    };
    wrapper = shallow(<IncrementInput {...props}/>);
  });

  it('should render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should call the changeHandler on change', () => {
    expect(props.handleChange).not.toHaveBeenCalled();
    wrapper.find('input').simulate('change', 'test');
    expect(props.handleChange).toHaveBeenCalled();
    expect(props.handleChange).toHaveBeenCalledWith('test');
  });

  it('should call the handleIncrement prop on "+" button click', () => {
    expect(props.handleIncrement).not.toHaveBeenCalled();
    wrapper.find('.up').simulate('click');
    expect(props.handleIncrement).toHaveBeenCalled();
    expect(props.handleIncrement).toHaveBeenCalledWith('+');
  });

  it('should call the handleIncrement prop on "+" button click', () => {
    expect(props.handleIncrement).not.toHaveBeenCalled();
    wrapper.find('.down').simulate('click');
    expect(props.handleIncrement).toHaveBeenCalled();
    expect(props.handleIncrement).toHaveBeenCalledWith('-');
  });

  it('the placeholder prop should be passed to the input', () => {
    const input = wrapper.find('input');
    expect(input.props().placeholder).toBe(props.placeholder);
  });

  it('the name prop should be passed to the input', () => {
    const input = wrapper.find('input');
    expect(input.props().name).toBe(props.name);
  });

  it('the value prop should be passed to the input', () => {
    const input = wrapper.find('input');
    expect(input.props().value).toBe(props.value);
  });

  it('should not render a label by default', () => {
    expect(wrapper.find('label').length).toBe(0);
  });

  it('should render a label if label prop is passed', () => {
    const labelText = 'Pasta';
    wrapper.setProps({'label': labelText});
    const label = wrapper.find('label');
    expect(label.length).toBe(1);
    expect(label.text()).toBe(labelText);
  });

  it('should apply the input id to the label htmlFor attribute', () => {
    const labelText = 'Pasta';
    wrapper.setProps({'label': labelText});
    const label = wrapper.find('label');
    const input = wrapper.find('input');
    expect(label.prop('htmlFor')).toBe(input.prop('id'));
  });

});
