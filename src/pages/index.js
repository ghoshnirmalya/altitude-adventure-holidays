import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Jumbotron from '../components/jumbotron';
import Treks from '../components/landing-page/treks';
import WhyUs from '../components/landing-page/why-us';
import Testimonials from '../components/landing-page/testimonials';

class IndexPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div className="page">
        <Helmet title={siteTitle} />
        <Jumbotron />
        <section className="full-width-section">
          <Treks />
        </section>
        <section className="full-width-section">
          <WhyUs />
        </section>
        <section className="full-width-section">
          <Testimonials posts={posts} />
        </section>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 100)
          html
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            type
            address
          }
        }
      }
    }
  }
`;
