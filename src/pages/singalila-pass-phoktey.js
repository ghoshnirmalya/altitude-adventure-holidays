import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { Tooltip } from 'reactstrap';
import classnames from 'classnames';

import RupinPass1Image from '../assets/images/treks/rupin-pass-timeline-1.jpg';
import RupinPass2Image from '../assets/images/treks/rupin-pass-timeline-2.jpg';
import RupinPass3Image from '../assets/images/treks/rupin-pass-timeline-3.jpg';
import RupinPass4Image from '../assets/images/treks/rupin-pass-timeline-4.jpg';
import RupinPass5Image from '../assets/images/treks/rupin-pass-timeline-5.jpg';

class SingalilaPassPhoktey extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="page">
        <div className="row">
          <div className="col-md-4 d-none d-lg-block">
            <div
              style={{ backgroundImage: `url(${RupinPass1Image})` }}
              className="page__image page__image--2"
              alt="Card image"
            />
            <div
              style={{ backgroundImage: `url(${RupinPass2Image})` }}
              className="page__image page__image--3"
              alt="Card image"
            />
          </div>
          <div className="col-md-4">
            <div
              style={{ backgroundImage: `url(${RupinPass3Image})` }}
              className="page__image page__image--1"
              alt="Card image"
            />
          </div>
          <div className="col-md-4 d-none d-lg-block">
            <div
              style={{ backgroundImage: `url(${RupinPass4Image})` }}
              className="page__image page__image--2"
              alt="Card image"
            />
            <div
              style={{ backgroundImage: `url(${RupinPass5Image})` }}
              className="page__image page__image--3"
              alt="Card image"
            />
          </div>
        </div>
        <Helmet title={siteTitle} />
        <div className="row page__name">
          <div className="col">
            <h1 className="text-center">Singalila Pass & Phokteydara</h1>
          </div>
        </div>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Group size</h4>
                    <p className="card-text">4-15 heads</p>
                  </div>
                </div>
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Date</h4>
                    <p className="card-text">December 23 – December 30</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Cost</h4>
                    <p className="card-text">INR 15,000 (Indians)</p>
                    <p className="card-text">USD 300 (Foreigners from Siliguri to Siliguri)</p>
                    <p className="card-text help-text">The difference in costs is due to permit charges.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Difficulty</h4>
                    <p className="card-text">Easy</p>
                  </div>
                </div>
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Ideal season</h4>
                    <p className="card-text">May to October</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Altimeter</h4>
                    <p className="card-text">4,800m</p>
                  </div>
                </div>
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Join in</h4>
                    <p className="card-text">Shimla</p>
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
                  <div className="col-12">
                    <h2 className="reason__title">Description</h2>
                    <div className="reason__description text-muted">
                      <p>Like childhood sweethearts, the Singalila National Park with its many twists and turns represents the 1st taste of Himalayan adventure for most of us. We never forget our first love, do we? In this trek, we venture into the Singalila National Park through a less crowded trail from Uttarey, a sleepy village in Western Sikkim.</p>
                      <p>In 5 fun filled days we descend to Srikhola via Phalut after crossing the Singalila Pass(3,600m). The Phokteydara and Singalila Pass region is much closer to the Kangchenjunga massif than Sandakphu. And you’ll get stupendous views of the Sleeping Budhha from Phokteydara top and Singalila Pass. The trail has 2 cute little campsites before Phalut, Achaley(3,050m) and Kalijhar(3,500m). Phokteydara is just 30 minutes steep ascent from Kalijhar campsite.</p>
                      <p>We descend via Gorkhey and Srikhola, 2 quaint little hamlets situated in West Bengal, just south of the border with Sikkim.</p>
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
                  <div className="col-12">
                    <h2 className="reason__title">Itinerary</h2>
                    <div className="reason__description text-muted">
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">23rd December</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Arrive at Siliguri. Drive to Uttarey</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">24th December</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Achaley</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">25th December</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Kalijhar</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">26th December</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Phalut</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">27th December</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Gorkhey</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">28th December</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Srikhola. Drive to Darjeeling</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">29th December</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Rest and relax in Darjeeling</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">30th December</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Drive to Siliguri</h4>
                          </div>
                        </div>
                      </div>
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
                  <div className="col-12">
                    <h2 className="reason__title">What's included</h2>
                    <div className="reason__description text-muted">
                      <p>All meals from 23th December Dinner to 28th December Lunch. Only Breakfast in 29th and 30th December. Meals will be veg and non-veg.</p>
                      <p>Transfers from Siliguri to Uttarey, Srikhola to Darjeeling and Darjeeling to Siliguri.</p>
                      <p>Deluxe Tourist Hotel in Uttarey and Darjeeling.</p>
                      <p>Expert bilingual guide.</p>
                      <p>Services of Porters/Mules to carry all group and personal gear.</p>
                      <p>Services of Cooking Staff.</p>
                      <p>Group medical kit.</p>
                      <p>Good quality accommodation at Trekker’s Huts/Tents during trek.</p>
                      <p>Private transportation.</p>
                      <p>All park entrance fees and trekking permits.</p>
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

export default SingalilaPassPhoktey;

export const singalilaPassPhokteyQuery = graphql`
  query SingalilaPassPhokteyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
