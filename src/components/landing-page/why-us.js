import React from 'react';

import Mountain1Image from '../../assets/icons/mountains.png';
import Mountain2Image from '../../assets/icons/mountains-1.png';
import Mountain3Image from '../../assets/icons/mountains-2.png';
import Mountain4Image from '../../assets/icons/mountains-3.png';

const WhyUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center full-width-section__header">
          <h2>Why us</h2>
          <p className="lead">4 reasons why you should plan your next trip with us</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md">
          <div className="reason">
            <div className="row">
              <div className="col-2">
                <div>
                  <img
                    src={Mountain1Image}
                    className="reason__icon"
                  />
                </div>
              </div>
              <div className="col-10">
                <h4 className="reason__title">Small Teams</h4>
                <div className="reason__description text-muted">None of our group sizes exceed fifteen. Smaller teams mean better service, more personal attention to each and every one of you!</div>
              </div>
            </div>
          </div>
          <div className="reason">
            <div className="row">
              <div className="col-2">
                <div>
                  <img
                    src={Mountain2Image}
                    className="reason__icon"
                  />
                </div>
              </div>
              <div className="col-10">
                <h4 className="reason__title">Safety First</h4>
                <div className="reason__description text-muted">Zero. That's the number of injuries occurred in all of our 40+ trips till date. We always double check our gears and triple check on your health.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md">
          <div className="reason">
            <div className="row">
              <div className="col-2">
                <div>
                  <img
                    src={Mountain3Image}
                    className="reason__icon"
                  />
                </div>
              </div>
              <div className="col-10">
                <h4 className="reason__title">Tailor Made Trips</h4>
                <div className="reason__description text-muted">Have a Group? We design customised Adventure Holidays to your preferred destination, at your preferred time, according to your budget. Savvy?</div>
              </div>
            </div>
          </div>
          <div className="reason">
            <div className="row">
              <div className="col-2">
                <div>
                  <img
                    src={Mountain4Image}
                    className="reason__icon"
                  />
                </div>
              </div>
              <div className="col-10">
                <h4 className="reason__title">Best Value</h4>
                <div className="reason__description text-muted">Our prices are not 'cheap', because our services aren't. Move over 'low' and 'high' prices, welcome aboard to the 'right' price!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
