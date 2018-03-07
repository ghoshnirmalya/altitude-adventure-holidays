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

class MandaniValley extends React.Component {
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
            <h1 className="text-center">Mandani Valley and Madhyamaheswar</h1>
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
                    <p className="card-text">July 10 – July 20</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Cost</h4>
                    <p className="card-text">INR 25,000 (Indians)</p>
                    <p className="card-text">USD 500 (Foreigners from Haridwar to Haridwar)</p>
                    <p className="card-text help-text">The difference in costs is due to permit charges and national Park entry fees.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Difficulty</h4>
                    <p className="card-text">Intermediate to Difficult</p>
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
                      <p>Part of the legendary lost trail, which connects Badrinath to Kedarnath, two famous Hindu shrines of Indian Himalaya, the trek through Manadani Valley is a blissful experience.</p>
                      <p>The view of the magnificent Chaukamba and other peaks en route is breath-taking. Mandani valley is a pilgrimage center, and according to legend is the place where Goddess Durga killed the demon Mahishasura. The trek covers 4 high passes, some of the most fascinating meadows of the Indian Himalaya and some cute little campsites.</p>
                      <p>Before venturing into the valley of the gods, we trek to Madhyamaheswar, a famous Hindu shrine, one of five Kedars of Garhwal Himalaya. The views of Chowkhamba and Mandani peaks from Bura Madhyamaheswar is a treat for everyone. This short 3 day trek to Madhyamaheswar is a nice acclimatization for the challenges in the coming days.</p>
                      <p>The trek to Mandani Valley begins in the quaint village of Ransi. Descending from Dwara Khal (4,140 m), traversing the length of the Mandani bugyal and then a steep climb, one reaches the base camp of Yeonbuk Col. The ascent from here over the Yeonbuk Col (4,663 m) is over snow-covered boulders. Moving up and down over the high snowfields one cross the Bishali col (4,754 m) from Yeonbuk Col. The camp is set on snow below the Bishali Col. The trek continues over the last pass that is Mahapanth Col (4,602 m). The descent on the other side is sharp and dangerous over boulders covered in snow. The trek then is successfully completed at Kedarnath.</p>
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
                              <h5 className="text-muted">10th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Arrival at Haridwar. Drive to Ransi via Guptakashi</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">11th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Ransi to Bantoli</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">12th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Bantoli to Madhyamaheswar</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">13th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Madhyamaheswar to Bura Madhyamaheswar and back to Ransi</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">14th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Sandhera</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">15th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Paturi</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">16th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Thouli</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">17th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Cross Dwara Khal. Camp at Mandani</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">18th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Yeonbuk Col B.C.</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">19th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Cross Yeonbuk Col and Bisali Col. camp at Mahapanth Tal Campsite</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">20th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Cross Mahapanth Col, trek to Kedarnath</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">21st September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Gourikund. Drive to Guptakashi</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">22nd September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Reserve Day</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">23rd September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Drive to Haridwar</h4>
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
                      <p>All meals from 10th September Dinner to 23rd September Breakfast. Meals will be veg and non-veg.</p>
                      <p>All Transportation.</p>
                      <p>Deluxe Tourist Hotel in Ransi and Guptakashi.</p>
                      <p>Expert bilingual guide.</p>
                      <p>Services of Porters/Mules to carry all group and personal gear.</p>
                      <p>Services of a Sherpa and HAP.</p>
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

export default MandaniValley;

export const mandaniValleyQuery = graphql`
  query MandaniValleyQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
