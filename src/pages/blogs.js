import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Footer from '../components/footer';

import '../styles/pages/blogs.scss';

class Blogs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div className="page">
        <div className="container">
          <Helmet title={siteTitle} />
          <div className="row">
            <div className="col blogs">
              {posts.map(post => {
                if (post.node.frontmatter.path !== '/404/') {
                  const title = get(post, 'node.frontmatter.title') || post.node.path;

                  return (
                    <div
                      key={post.node.frontmatter.path}
                      className="blogs__blog"
                    >
                      <Link
                        to={post.node.frontmatter.path}
                        className="blog__link"
                      >
                        <div className="media">
                          <div className="media-body">
                            <h3 className="blog__title">{title}</h3>
                            <p className="blog__body text-muted" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="container-fluid section">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Blogs;

export const blogsQuery = graphql`
  query BlogsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
