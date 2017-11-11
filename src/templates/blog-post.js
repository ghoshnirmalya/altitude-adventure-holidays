import React from 'react';
import Helmet from 'react-helmet';

export default function Template({
  data
}) {
  const { markdownRemark: post } = data;

  return (
    <div className="container">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <div className="row">
        <div className="col blog-post">
          <div className="blog-post__title text-center">
            <h1>{post.frontmatter.title}</h1>
          </div>
          <div className="blog-post__body" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
