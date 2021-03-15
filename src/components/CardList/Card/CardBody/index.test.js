import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import CardBody from './index';

configure({adapter: new Adapter()});

describe('<CardBody />', () => {
  let wrapper;
 
  beforeEach(() => {
    const props = {
      checked: false,
      bodyData: '',
      onChange: jest.fn(),
      isEditable: false,
      singleCard: false
    };

    wrapper = shallow(<CardBody {...props}/>);
  }); 

  it('should render CardBody component', () => {
    expect(wrapper).toBeDefined();
  });
});
