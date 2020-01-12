import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';

export default class Header extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { sort, changeSort } = this.props;
    const links = [
      ['Hot', ''],
      ['New', 'new'],
      ['Controversial', 'controversial'],
    ];
    const navbar = links.map(([label, value]) => (
      <Link
        key={value}
        className={`router-link ${sort === value ? 'active' : ''}`}
        to={`/${value}`}
        onClick={changeSort(value)}
      >
        {label}
      </Link>
    ));
    return (
      <div className="header">
        <a href="/">REDDIT!</a>
        <div className="nav-bar">{navbar}</div>
      </div>
    );
  }
}

Header.propTypes = {
  changeSort: PropTypes.func,
  sort: PropTypes.string,
};
