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

class GoechaLa extends React.Component {
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
            <h1 className="text-center">Goecha La</h1>
          </div>
        </div>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Group size</h4>
                    <p className="card-text">4-12 heads</p>
                  </div>
                </div>
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Date</h4>
                    <p className="card-text">November 5 – November 14</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Cost</h4>
                    <p className="card-text">INR 20,000 (Indians)</p>
                    <p className="card-text">USD 400 (Foreigners from Haridwar to Haridwar)</p>
                    <p className="card-text help-text">The difference in costs is due to permit charges.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Difficulty</h4>
                    <p className="card-text">Moderate</p>
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
                      <p>Sitting pretty on the head of Oglathong Valley, Goecha La(4,940m) has attracted explorers and
travelers for decades. By far the most frequented trek in Sikkim, one of the most popular trails
in Indian Himalaya, the trek to Goecha La from Yuksom, is hugely popular among mountain
lovers all over the world.</p>
                      <p>Goecha La(4,940m) was first reached in the 19th century by Major Sherwill, an Englishman. It
was another Englishman, Mr. Claude White, first crossed the pass. The pass lies between
Pandim and the spurs of Kabru, beside the Gocha Peak. A passage between the now famous
Oglathong valley and the Talung valley.</p>
                      <p>This easily (by Himalayan standards) accessible pass is nowadays quite popular with trekkers,
as this trail also offers stupendous views of Pandim and Kangchenjunga. The trek also offers a
glimpse of the deep Rhododendron forests which surrounds the east and south-east flanks of the
Kangchenjunga massif.</p>
                      <p>One does start the trek from Yuksom, the quaint township in west Sikkim, and reaches the base
of the pass after 4-5 days of easy to moderate, but long walking days. On the way you’ll pass
another popular trekking destination, Dzongri, the grazing place for yaks. There are also a few
serene high altitude lakes on this trail, Samiti lake and Goecha Lake being the popular ones.</p>
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
                              <h5 className="text-muted">5th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Arrival at Siliguri. Drive to Yuksum</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">6th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Bakhim</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">7th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Dzongri</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">8th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Thansing</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">9th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Lamuney</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">10th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Goecha La and back to Lamuney</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">11th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Kokchurang</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">12th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Tsokha</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">13th November</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Yuksum. Drive to Pelling</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">14th November</h5>
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
                      <p>All meals from 26th Breakfast Breakfast to 30th September Lunch. Only Breakfast for 25th September and 1st October and Dinner for 24th September. Meals will be veg and non-veg.</p>
                      <p>All Transportation.</p>
                      <p>Deluxe Tourist Hotel in Uttarkashi and Gangotri.</p>
                      <p>Expert bilingual guide.</p>
                      <p>Services of Porters/Mules to carry all group and personal gear.</p>
                      <p>Services of a HAP.</p>
                      <p>Services of Cooking Staff.</p>
                      <p>Group Trekking gear like Rope, Ice Axes.</p>
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

export default GoechaLa;

export const goechaLaQuery = graphql`
  query GoechaLaQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
