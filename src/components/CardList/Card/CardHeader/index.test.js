import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CardHeader from './index';

import { BiEdit } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'

configure({adapter: new Adapter()});

describe('<CardHeader />', () => {
  let wrapper;

  beforeEach(() => {
    const props = {
      className: 'card-header',
      isEditable: false,
      headerData: '',
      onChange: jest.fn(),
      singleCard: false,
      onSave: jest.fn(),
      onCancel: jest.fn(),
      onOpenEditMode: jest.fn(),
      onChangeStyle: jest.fn(),
      viewMode: false
    };

    wrapper = shallow(<CardHeader {...props}/>);
  });
  
  it('should render CardHeader component', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render save and cancel buttons if isEditable', () => {
    wrapper.setProps({
      isEditable: true
    });
    expect(wrapper.find(AiOutlineSave)).toHaveLength(1);
    expect(wrapper.find(ImCancelCircle)).toHaveLength(1);
  });

  it('should not render edit button if viewMode', () => {
    wrapper.setProps({
      viewMode: true 
    });
    expect(wrapper.find(BiEdit)).toHaveLength(0);
  });

  it('should render edit button and checkbox if !isEditable', () => {
    expect(wrapper.find(BiEdit)).toHaveLength(1);
    expect(wrapper.find('input[type="checkbox"]')).toHaveLength(1);
  });

  it('should set classNames correctly', () => {
    wrapper.setProps({checked: true});
    expect(wrapper.find('.active')).toBeDefined();
  });
});