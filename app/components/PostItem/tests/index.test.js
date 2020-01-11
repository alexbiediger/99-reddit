import React from 'react';
import { shallow } from 'enzyme';

import PostItem from '../index';

describe('<PostItem />', () => {
  it('should render a list', () => {
    const post = {
      data: { permalink: '/r/permalink-fixture' },
    };
    const renderedComponent = shallow(<PostItem post={post} />);
    expect(renderedComponent.length).toEqual(1);
  });
});
