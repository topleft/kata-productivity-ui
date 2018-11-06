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

});
