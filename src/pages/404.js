import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

class PageNotFound extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="container">
        <Helmet title={siteTitle} />
        <div className="row">
          <div className="col">
            404
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;

export const pageNotFoundQuery = graphql`
  query PageNotFoundQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
