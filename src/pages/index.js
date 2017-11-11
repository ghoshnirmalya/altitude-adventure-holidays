import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

class IndexPage extends React.Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <Helmet title={siteTitle} />
          <div className="container">
            <h1 className="display-3">Fluid jumbotron</h1>
            <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
