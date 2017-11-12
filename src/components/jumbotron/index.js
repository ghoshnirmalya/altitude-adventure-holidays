import React from 'react';
import Link from 'gatsby-link';

import './styles.scss';

const Jumbotron = () => {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-3">Altitude Adventure Holidays</h1>
        <p className="lead">Adventure holidays in Indian Himalaya</p>
        <Link
          to="/about"
          className="btn btn-primary btn-lg"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}

export default Jumbotron;
