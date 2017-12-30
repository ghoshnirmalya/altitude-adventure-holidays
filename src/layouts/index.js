import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/vendor.scss';
import '../styles/sections.scss';
import '../styles/cards.scss';

export default class TemplateWrapper extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <section className="navbar-section">
          <Header />
        </section>
        <section className="content-section">
          {this.props.children()}
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}
