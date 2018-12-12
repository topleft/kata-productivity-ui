import React from 'react';
import {shallow} from 'enzyme';
import TextInput from './TextInput';

describe('TextInput', () => {
  let props;
  let wrapper;
  beforeEach(() => {
    props = {
      name: 'test',
      value: '',
      handleChange: jest.fn(),
      placeholder: 'hold the place',
    };
    wrapper = shallow(<TextInput {...props}/>);
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

  it('icon should render if passed as prop', () => {
    const Icon = () => {}; //mock component
    expect(wrapper.find('Icon').exists()).not.toBe(true);
    wrapper.setProps({icon: Icon});
    expect(wrapper.find('Icon').exists()).toBe(true);
  });

  it('button should render if passed as prop', () => {
    const Button = () => {}; //mock component
    expect(wrapper.find('Button').exists()).not.toBe(true);
    wrapper.setProps({button: Button});
    expect(wrapper.find('Button').exists()).toBe(true);
    expect(wrapper.find('Button').prop('skinny')).toBe(true);
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

  it('should render error message based validator result', () => {
    let error;
    const input = wrapper.find('input');
    const validator = (value) => ({isValid: value});

    wrapper.setProps({'validator': validator, value: true});
    input.simulate('blur');
    error = wrapper.find('.text-input--error-message');
    expect(error.exists()).toBe(false);

    wrapper.setProps({'validator': validator, value: false});
    input.simulate('blur');
    error = wrapper.find('.text-input--error-message');
    expect(error.exists()).toBe(true);
  });

  it('should render default error message if none is passed', () => {
    const input = wrapper.find('input');
    const validator = (value) => ({isValid: value});
    wrapper.setProps({'validator': validator, value: false});
    input.simulate('blur');
    const error = wrapper.find('.text-input--error-message');
    expect(error.text()).toBe('Invalid');
  });

  it('should render custom error message', () => {
    const errorText = 'Custom Error';
    const input = wrapper.find('input');
    const validator = (value) => ({isValid: value, error: errorText});
    wrapper.setProps({'validator': validator, value: false});
    input.simulate('blur');
    const error = wrapper.find('.text-input--error-message');
    expect(error.text()).toBe(errorText);
  });


});
