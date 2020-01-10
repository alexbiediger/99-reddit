import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <a href="/">
          REDDIT!
        </a>
        <div className="nav-bar">
          <Link className="router-link" to="/">
            Hot
          </Link>
          <Link className="router-link" to="/new">
            New
          </Link>
          <Link className="router-link" to="/controversial">
            Controversial
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
