import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.scss';
import Alien from './images/alien.svg';
import ViewCard from './images/view-card.svg';
import ViewClassic from './images/view-classic.svg';
import ViewCompact from './images/view-compact.svg';

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
        <a className="nav-banner" href="/">
          <img src={Alien} alt="99 Reddit Logo" />
          99 Reddit
        </a>
        <div className="nav-views">
          <button type="button" title="Card">
            <img src={ViewCard} alt="Card" />
          </button>
          <button type="button" title="Classic">
            <img src={ViewClassic} alt="Classic" />
          </button>
          <button type="button" title="Compact">
            <img src={ViewCompact} alt="Compact" />
          </button>
        </div>
        <div className="nav-bar">{navbar}</div>
      </div>
    );
  }
}

Header.propTypes = {
  changeSort: PropTypes.func,
  sort: PropTypes.string,
};
