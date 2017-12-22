import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="container">
        <Helmet title={siteTitle} />
        <div className="row">
          <div className="col">
            About
          </div>
        </div>
      </div>
    );
  }
}

export default About;

export const aboutQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`