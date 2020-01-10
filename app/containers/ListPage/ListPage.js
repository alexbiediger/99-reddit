/*
 * ListPage
 *
 * List all the posts
 */
import React from 'react';
import { Helmet } from 'react-helmet';

import PostsList from 'components/PostsList';

import './style.scss';

export default class ListPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>fooobar
        <Helmet>
          <title>Frontpage</title>
          <meta name="description" content="A reddit clone ListPage" />
        </Helmet>
        <div className="list-page">
          <section className="centered">
            <h2>Weclome to reddit</h2>
          </section>
          <section className="centered">
            <PostsList />
          </section>
        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
};
