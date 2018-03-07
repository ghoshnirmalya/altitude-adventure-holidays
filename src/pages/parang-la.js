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

class ParangLa extends React.Component {
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
            <h1 className="text-center">Parang La</h1>
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
                    <p className="card-text">July 10 – July 20</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Cost</h4>
                    <p className="card-text">INR 35,000 (Indians)</p>
                    <p className="card-text">USD 550 (Foreigners from Lohajung to Karnprayag)</p>
                    <p className="card-text help-text">The difference in costs is due to permit charges and national Park entry fees.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Difficulty</h4>
                    <p className="card-text">Intermediate</p>
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
                      <p>Parang La(5,700m) is situated at the divide between Spiti and Ladakh mountains. Not a technically difficult pass but this region is notorious for high winds. And because of a high starting altitude, proper acclimatization is key for this trek.</p>
                      <p>Locals travel between the Spiti valley and Rupshu valley using this pass for a very long time. First documented crossing by a westerner was done in 1928, done by Mrs. K. G. Lethbridge and her husband, accompanied by 2 yaks and 12 men.</p>
                      <p>The trek starts from Kibber, a high altitude village near Kaza, in Spiti and ends at Korzok village, on the banks of Tso Moriri lake.</p>
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
                              <h5 className="text-muted">10th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Manali to Kaza Drive</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">11th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Acclimatize in Kaza</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">12th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Kaza to Kibber Drive</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">13th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Tholdok</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">14th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Bonrojen</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">15th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Kharsa via Parang La</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">16th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Khotpa Bhouje</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">17th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Norbu Sumdo</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">18th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary"> Trek to Kiangdom</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">19th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Korzok</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">20th July</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Drive to Leh</h4>
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
                      <p>All meals from 13th July Breakfast to 20th July Breakfast. Only Breakfast on other days. Meals will be veg and non-veg.</p>
                      <p>Transfers from Manali to Kaza, Kaza to Kibber and Korzok to Leh.</p>
                      <p>Deluxe Tourist Hotel at Kaza, Kibber and Korzok. Premium Hotel in Leh.</p>
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

export default ParangLa;

export const parangLaQuery = graphql`
  query ParangLaQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
