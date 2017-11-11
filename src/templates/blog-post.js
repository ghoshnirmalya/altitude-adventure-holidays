import React from 'react';
import Helmet from 'react-helmet';

const BlogPost = ({data}) => {
  const { markdownRemark: post } = data;

  return (
    <div className="container">
      <Helmet title={post.frontmatter.title} />
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

export default BlogPost;
