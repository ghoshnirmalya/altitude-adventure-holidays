import React from 'react';

import './styles.scss';

import InstagramIcon from '../../assets/icons/instagram.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import TwitterIcon from '../../assets/icons/twitter.png';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="row footer">
        <div className="col">
          Altitude Adventure Holidays
        </div>
        <div className="col text-right">
          <a
            href="https://twitter.com/altitudevg/"
            target="_blank"
          >
            <img
              src={TwitterIcon}
              className="footer__social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/altitudeindia/"
            target="_blank"
          >
            <img
              src={InstagramIcon}
              className="footer__social-icon"
            />
          </a>
          <a
            href="https://www.facebook.com/AltitudeVG/"
            target="_blank"
          >
            <img
              src={FacebookIcon}
              className="footer__social-icon"
            />
          </a>
        </div>
      </div>
    );
  }
}
