import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import $ from 'jquery';
import Popper from 'popper.js';

window.$ = $;
window.Popper = Popper;

require('bootstrap');

import '../styles/vendor.scss';
import '../styles/sections.scss';
import '../styles/templates/blog-post.scss';

import BlackLogo from '../assets/images/logo-black.png';

const TemplateWrapper = ({ children }) => (
  <div className="app">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <section className="navbar-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">
            <img src={BlackLogo} width="30" height="30" alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">Blogs</Link>
              </li>
              <li className="nav-item">
                <Link to="/treks" className="nav-link">Treks</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
    <section className="content-section">
      {children()}
    </section>
    <section className="footer-section">
    </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
