import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import WhyUsImage from '../assets/icons/why-us.png';
import EnvironmentImage from '../assets/icons/environment.png';
import AreasOfOperationImage from '../assets/icons/areas-of-operation.png';
import HappyFacesImage from '../assets/icons/happy-faces.png';

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="page">
        <Helmet title={siteTitle} />
        <div className="jumbotron jumbotron-fluid text-center about">
          <div className="container">
            <h1 className="display-3">About Us</h1>
          </div>
        </div>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <p>Formed in 2012 by Riddha Datta, a keen adventurer and professional outdoor expert,
                  we have already successfully organized more than 40 Adventure Holidays with a global
                  clientele. Altitude is the brainchild of Riddha, who personally leads all of our trips, along
                  with a skilled and experienced support team.</p>
                <p>We generally offer tailor made adventure trips for our clients, but, we have a few fixed departures too, throughout the year.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="row">
                  <div className="col-2">
                    <div>
                      <img
                        src={WhyUsImage}
                        className="reason__icon"
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <h2 className="reason__title">Why Us</h2>
                    <div className="reason__description text-muted">
                      <p>There are so many Adventure Tour operators out there today. All of them guide their
                      clients to different peaks, or passes, or valleys. All of them promise highest safety
                      standards, medical support, state of the art gears etc. Well, we’re no different on those
                      fronts. So why indulge in a ‘young’ company? Here are some of our unique features:</p>

                      <p>1. All of our trips are exclusive in nature. Uniquely designed, tailor made trips
                        dedicated to fulfill every desire of those adventurous souls.</p>
                      <p>2. We believe in small groups, preferably not more than 10-15, which enables us for
                        more personalized attention, and enables our clients to gel with each other much
                        more easily..</p>
                      <p>3. Our forte is tailor made Adventure Holidays which are heavily customizable,
                        luxurious in all aspects, rich in cultural experiences. We believe ‘places’ are
                        nothing without it’s ‘faces’, and we always plan our trips through one or the other
                        quaint Himalayan hamlets..</p>
                      <p>4. Each of our trips feature Two unique features: Warm Up: Thorough briefing about
                        the place, itinerary, current weather, advices on physical preparation, checklist
                        for packing etc…will set the mood just right for the adventure ahead. Cool Down:
                        the hardship one endures, up above in a trek/climb, has to be celebrated
                        properly, once back among the civilization. We always include a day or two in
                        luxurious surroundings, to relax, replenish and reload..</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="row">
                  <div className="col-10">
                    <h2 className="reason__title">Environment</h2>
                    <div className="reason__description text-muted">
                      <p>No, we don’t have any intentions to save the planet, if that’s what you’re expecting to
                        hear. Rather, we’re too selfish, and think only about our loved ones. The mountains,
                        luckily, are the things we love most, and we leave no stones unturned to keep it clean,
                        pristine, just the way it supposed to be.</p>

                      <p>We carry all our garbage down with us, use recyclable products as much as we can,
                        educate our clients about the potential risks our loved ones may face, if we don’t act
                        responsibly.</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div>
                      <img
                        src={EnvironmentImage}
                        className="reason__icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="row">
                  <div className="col-2">
                    <div>
                      <img
                        src={AreasOfOperationImage}
                        className="reason__icon"
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <h2 className="reason__title">Area of Operation</h2>
                    <div className="reason__description text-muted">
                      <p>The Himalaya have been blessed with a supreme range of mountains aptly suitable for
                        trekking up its steep slopes or climbing one of its many daring peaks. We organize
                        adventure holidays in Ladakh, Uttarakhand, Himachal Pradesh and Sikkim.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <div className="row">
                  <div className="col-10">
                    <h2 className="reason__title">Happy Faces</h2>
                    <div className="reason__description text-muted">
                      <p>‘Friendly stuff’ is a clichéd term. Our stuff members will be your ‘friends’ for life. Period.
                        One of many advantages of operating in a small team is we get lots of time to get to
                        know each other. And that’s why the higher we climb, more days we spend in the
                        mountains, the closer we become.</p>
                      <p>We always hire some local people to work as porters and helpers for our members. As
                        we all know, most of the villages in the remote Himalayan region still depend mostly on
                        tourism. We try to do our bit for providing them some opportunity to earn.</p>
                      <p>Summit or not, one thing is sure, with us, every trip is a success, for everyone.</p>
                    </div>
                  </div>
                  <div className="col-2">
                    <div>
                      <img
                        src={HappyFacesImage}
                        className="reason__icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;

export const aboutQuery = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
