import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

export default class Header extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { changeSort } = this.props;
    return (
      <div className="header">
        <a href="/">REDDIT!</a>
        <div className="nav-bar">
          <Link className="router-link" to="/" onClick={changeSort('')}>
            Hot
          </Link>
          <Link className="router-link" to="/new" onClick={changeSort('new')}>
            New
          </Link>
          <Link
            className="router-link"
            to="/controversial"
            onClick={changeSort('controversial')}
          >
            Controversial
          </Link>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  changeSort: PropTypes.func,
};
