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

class Kedartal extends React.Component {
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
            <h1 className="text-center">Kedartal</h1>
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
                    <p className="card-text">September 24 – October 1</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Cost</h4>
                    <p className="card-text">INR 15,000 (Indians)</p>
                    <p className="card-text">USD 300 (Foreigners from Haridwar to Haridwar)</p>
                    <p className="card-text help-text">The difference in costs is due to permit charges.</p>
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
                      <p>One of the finest treks in Indian Himalaya, the short trek to Kedartal(4,750m), a high altitude lake nestled at the feet of Mt. Thalaysagar, takes one to an amphitheater of lofty peaks in just 3 moderate walking days from Gangotri, the famous Hindu shrine of Indian Himalaya.</p>
                      <p>Though just 17 km away from the famous Hindu pilgrimage Gangotri, is not for absolute newbies. The steep terrain throughout and some tricky rock fall areas make the trail a bit difficult.</p>
                      <p>The lake is fed by the snowfall over Thalay Sagar (6,904m), Meru (6,672m), Bhrigupanth (6,772m) and other surrounding peaks, and is the source of Kedar Ganga, which in Hindu mythology is considered to be Shiva’s contribution to Bhagirathi (a source stream of the Ganges).</p>
                      <p>Kedartal(4,750m) is the basecamp of many famous peaks in that Region, most notably Thalaysagar and Jogin group of peaks. Short but challenging, with breathtaking views on offer, Kedartal is a must-do trek for any Adventure enthusiasts.</p>
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
                              <h5 className="text-muted">24th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Arrival at Haridwar. Drive to Uttarkashi(m)</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">25th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Drive from Uttarkashi to Gangotri</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">26th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Bhujkharak</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">27th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Kedarkharak</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">28th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Kedartal</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">29th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Kedarkharak</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">30th September</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Trek to Gangotri. Drive to Uttarkashi</h4>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">1st October</h5>
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

export default Kedartal;

export const kedartalQuery = graphql`
  query KedartalQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
