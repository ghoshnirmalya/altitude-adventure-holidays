import React from 'react';

import './styles.scss';

import InstagramIcon from '../../assets/icons/instagram.png';
import FacebookIcon from '../../assets/icons/facebook.png';
import TwitterIcon from '../../assets/icons/twitter.png';
import EmailIcon from '../../assets/icons/email.png';
import TelephoneIcon from '../../assets/icons/telephone.png';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row footer">
          <div className="col">
            <a href="mailto:info@altitudeadventureholidays.com">
              <img
                src={EmailIcon}
                className="footer__social-icon"
              />
            </a>
            <a href="callto:+919903331025">
              <img
                src={TelephoneIcon}
                className="footer__social-icon"
              />
            </a>
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
      </div>
    );
  }
}
