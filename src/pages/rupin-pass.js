import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

class RupinPassTrek extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="container">
        <Helmet title={siteTitle} />
        <div className="row">
          <div className="col">
            RupinPassTrek
          </div>
        </div>
      </div>
    );
  }
}

export default RupinPassTrek;

export const rupinPassTrekQuery = graphql`
  query RupinPassTrekQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
