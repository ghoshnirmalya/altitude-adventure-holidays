import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import $ from 'jquery';
import Popper from 'popper.js';

window.$ = $;
window.Popper = Popper;

require('bootstrap');

import '../styles/vendor.scss';

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="http://getbootstrap.com/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">Disabled</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
    <section className="content-section">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
      <div className="container">
        {children()}
      </div>
    </section>
    <section className="footer-section">
    </section>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
