import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Card } from './index'

import CardBody from './CardBody';
import CardHeader from './CardHeader';

import * as actionTypes from '../../../store/actions/actionTypes';

import { BiEdit } from 'react-icons/bi';
import { AiOutlineSave } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im'

configure({adapter: new Adapter()});

const mockDispatchFn = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatchFn
}));

const mockHistoryPushFn = jest.fn();
jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: mockHistoryPushFn,
  }),
}));

describe('<Card />', () => {
  let wrapper;
  
  const props = {
    id: '001',
    cardData: {
      headerData: '',
      bodyData: ''
    },
    viewMode: false
  }

  beforeEach(() => wrapper = shallow(<Card {...props}/>));

  it('should render CardHeader component', () => {
    expect(CardHeader).toHaveLength(1);
  });

  it('should render CardBody component', () => {
    expect(CardBody).toHaveLength(1);
  });

  it('should open edit mode when clicking edit icon', () => {
    wrapper.find(CardHeader).dive().find(BiEdit).simulate('click');
    expect(wrapper.find(CardHeader).prop('isEditable')).toEqual(true);
  });

  it('should decline changes inside header when clicking cancel icon', () => {
    wrapper.find(CardHeader).dive().find(BiEdit).simulate('click');
    wrapper.find(CardHeader).dive().find('input[type="text"]').simulate('change', {
      target: {value: 'test header input'}
    });
    wrapper.find(CardHeader).dive().find(ImCancelCircle).simulate('click');
    expect(wrapper.find(CardHeader).prop('headerData')).toBe('');
  });
  
  it('should decline changes inside body when clicking cancel icon', () => {
    wrapper.find(CardHeader).dive().find(BiEdit).simulate('click');
    wrapper.find(CardBody).dive().find('textarea').simulate('change', {
      target: {value: 'test body input'}
    });
    wrapper.find(CardHeader).dive().find(ImCancelCircle).simulate('click');
    expect(wrapper.find(CardBody).prop('bodyData')).toBe('');
  });

  it('should toggle checkbox to make card active/inactive', () => {
    wrapper.find(CardHeader).dive().find('input[type="checkbox"]').simulate('change', {
      target: {value: true}
    });

    expect(mockDispatchFn).toHaveBeenCalledWith({
      type: actionTypes.TOGGLE_CARD,
      id: wrapper.prop('id'),
      checked: wrapper.find(CardHeader).prop('checked')
    });
  });

  it('should save changes when clicking save icon', () => {
    wrapper.find(CardHeader).dive().find(BiEdit).simulate('click');
    wrapper.find(CardHeader).dive().find('input[type="text"]').simulate('change', {
      target: {value: 'some header text'}
    });
    wrapper.find(CardBody).dive().find('textarea').simulate('change', {
      target: {value: 'some body text'}
    });
    wrapper.find(CardHeader).dive().find(AiOutlineSave).simulate('click');

    expect(mockDispatchFn).toHaveBeenCalledWith({
      type: actionTypes.SAVE_CHANGES,
      id: wrapper.prop('id'),
      tempData: {
        headerData: wrapper.find(CardHeader).prop('headerData'),
        bodyData: wrapper.find(CardBody).prop('bodyData'),
      }
    });
  });

  it('should redirect to single card page on doubleClick', () => {
    wrapper.simulate("doubleClick");
    expect(mockHistoryPushFn).toHaveBeenCalledWith('/card/' + wrapper.prop('id'));
  });
});
