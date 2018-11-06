import React from 'react';
import {shallow} from 'enzyme';
import Icon from './Icon';

describe('Icon', () => {
  it('should render', () => {
    const wrapper = shallow(<Icon/>);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render an svg element', () => {
    const wrapper = shallow(<Icon/>);
    const svg = wrapper.find('svg');
    expect(svg.exists()).toBe(true);
  });

  it('should ad default props to svg element', () => {
    const wrapper = shallow(<Icon/>);
    const defaults = {
      fill: 'currentColor',
      height: '20',
      stroke: 'currentColor',
      width: '20',
    };
    const svg = wrapper.find('svg');
    const svgProps = svg.props();
    Object.keys(defaults).forEach((key) => {
      const expected = defaults[key];
      const actual = svgProps[key];
      expect(actual).toEqual(expected);
    });
    expect(svg.exists()).toBe(true);
  });

  it('should apply props to svg element', () => {
    const props = {
      fill: '#FFF',
      height: '22',
      stroke: '#000',
      width: '22',
      viewBox: '0 0 20 20',
      className: 'best-svg'
    };
    const wrapper = shallow(<Icon {...props}/>);
    const svg = wrapper.find('svg');
    const svgProps = svg.props();
    Object.keys(props).forEach((key) => {
      const expected = props[key];
      const actual = svgProps[key];
      expect(actual).toEqual(expected);
    });
    expect(svg.exists()).toBe(true);
  });



  it('should render a title', () => {
    const wrapper = shallow(<Icon title='test'/>);
    const title = wrapper.find('title');
    const id = title.props().id
    expect(title.exists()).toBe(true);
    expect(title.text()).toEqual('test');
    expect(id).toEqual('test-id');
  });

  it('should render with an aria-labelledby prop', () => {
    const wrapper = shallow(<Icon title='test'/>);
    const svg = wrapper.find('svg');
    const ariaValue = svg.props()['aria-labelledby']
    expect(ariaValue).toEqual('test-id');
  });

  it('should render children inside of the svg tag', () => {
    const children = 'test123';
    const wrapper = shallow(<Icon>{children}</Icon>);
    const text = wrapper.find('svg').text();
    expect(text).toContain(children);
  });
});

