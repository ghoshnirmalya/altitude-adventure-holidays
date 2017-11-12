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
                <h4 className="reason__title">Leverage</h4>
                <div className="reason__description text-muted">Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity.</div>
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
                <h4 className="reason__title">Bring</h4>
                <div className="reason__description text-muted">Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</div>
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
                <h4 className="reason__title">Capitalize</h4>
                <div className="reason__description text-muted">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</div>
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
                <h4 className="reason__title">Podcasting</h4>
                <div className="reason__description text-muted">Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
