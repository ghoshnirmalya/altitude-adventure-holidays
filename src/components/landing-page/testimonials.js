import React from 'react';
import Link from 'gatsby-link';
import get from 'lodash/get';

import Slider from '../slider';

const Testimonials = ({posts}) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center full-width-section__header">
          <h2>Testimonials</h2>
          <p className="lead">What others are saying about us</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Slider>
            {posts
              .filter(post => post.node.frontmatter.type === "testimonial") // show only blogs
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
                        <div className="card text-white bg-primary">
                          <div className="card-body">
                            <h4 className="card-title">{title}</h4>
                            <h6 className="mb-4">{post.node.frontmatter.address}</h6>
                            <p className="card-text" dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
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

export default Testimonials;
