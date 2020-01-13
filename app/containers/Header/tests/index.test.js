import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';
import { mapDispatchToProps } from '../index';
import { loadPosts, changeMode } from '../../App/actions';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(
      <Header changeSort={() => {}} changeMode={() => {}} sort="new" />,
    );
    expect(renderedComponent.length).toEqual(1);
  });

  describe('mapDispatchToProps', () => {
    describe('changeSort', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.changeSort).toBeDefined();
      });

      it('should dispatch loadPost when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.changeSort('new')();
        expect(dispatch).toHaveBeenCalledWith(loadPosts('new'));
      });
    });

    describe('changeMode', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.changeMode).toBeDefined();
      });

      it('should dispatch changeMode when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.changeMode('compact')();
        expect(dispatch).toHaveBeenCalledWith(changeMode('compact'));
      });
    });
  });
});
