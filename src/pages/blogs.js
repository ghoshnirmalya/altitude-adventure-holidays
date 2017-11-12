import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

class Blogs extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');
    const posts = get(this, 'props.data.allMarkdownRemark.edges');

    return (
      <div className="page">
        <div className="container">
          <Helmet title={siteTitle} />
          <div className="row">
            {posts
              .filter(post => post.node.frontmatter.type === "blog") // show only blogs
              .map(post => {
              if (post.node.frontmatter.path !== '/404/') {
                const title = get(post, 'node.frontmatter.title') || post.node.path;

                return (
                  <div
                    key={post.node.frontmatter.path}
                    className="col-md-4 list"
                  >
                    <div className="list__item">
                    <div className="card">
                      <div className="card-body">
                        <Link
                          to={post.node.frontmatter.path}
                          className="item__link"
                        >
                          <h4 className="card-title">{title}</h4>
                        </Link>
                        <p className="card-text item__body text-muted" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                        <Link
                          to={post.node.frontmatter.path}
                          className="btn btn-primary item__link"
                        >
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                );
              }
            })}
          </div>
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
          excerpt(pruneLength: 250)
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
            title
            type
          }
        }
      }
    }
  }
`
