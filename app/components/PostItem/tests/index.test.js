import React from 'react';
import { shallow } from 'enzyme';

import PostItem from '../index';

describe('<PostItem />', () => {
  it('should render a list', () => {
    const renderedComponent = shallow(<PostItem />);
    expect(renderedComponent.length).toEqual(1);
  });
});
