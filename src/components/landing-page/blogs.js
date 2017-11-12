import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Slider from '../slider';

const Blogs = ({posts}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center full-width-section__header">
          <h2>Blogs</h2>
          <p className="lead">Freshly baked stories from our kitchen</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Slider>
            {posts
              .filter(post => post.node.frontmatter.type === "blog") // show only blogs
              .map(post => {
                if (post.node.frontmatter.path !== '/404/') {
                  const title = get(post, 'node.frontmatter.title') || post.node.path;

                  return (
                    <div
                      key={post.node.frontmatter.path}
                      className="slider"
                    >
                      <Link
                        to={post.node.frontmatter.path}
                        className="link"
                      >
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <p className="card-text text-muted" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                }
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
