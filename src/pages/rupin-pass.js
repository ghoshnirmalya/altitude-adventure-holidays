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

class RupinPassTrek extends React.Component {
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
            <h1 className="text-center">Rupin Pass</h1>
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
                    <p className="card-text">May 28 – June 2</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card text-white bg-primary">
                  <div className="card-body">
                    <h4 className="card-title">Cost</h4>
                    <p className="card-text">INR 17,000 (Indians)</p>
                    <p className="card-text">USD 350 (Foreigners from Lohajung to Karnprayag)</p>
                    <p className="card-text help-text">The difference in costs is due to permit charges and national Park entry fees.</p>
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
                      <p>A superb trail for all kinds of adventurers, this classic trail connects Garhwal with Kinnaur district of Himachal. Cascading waterfalls, Ice Bridges, vast, undulating meadows, flocks of sheep, blue skies and sleepy hamlets…Rupin Pass trail has it all!</p>
                      <p>Rather than the conventional starting point of Dhaula, we start from Kwar, in the Dodra-Kwar tehsil of Shimla district. This way we actually shorten the trek by a day and avoid the rather uneventful trail between Dhaula and Sewa. The trail follows the Rupin Gad all the way to the 3 connecting waterfalls above Dhanderas Thatch. You’ll be crossing over to Himachal just before Sewa village.</p>
                      <p>The trail is full of Apple and Apricot trees. Also notice the typical Himachali architectures in the village of Jhaka. The Jhaka village is situated delicately in a small flat stretch of land in an otherwise steep slope. Making it look like a hanging village.</p>
                      <p>Their should be some snow near the pass, especially in the Kinnur side. The final push to the pass is very steep, but that’s a very short section anyway. Climbing through the 3 waterfalls can be a bit risky, make sure you follow the guide’s prescribed path, won’t be wise to make your own path through the slippery rocks! Other than that, this trek is a fairly easy walk, but full of Breathtaking scenaries. And the best thing about the trek? Can be completed in a week’s Holiday from Delhi!</p>
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
                              <h5 className="text-muted">28th May</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Shimla-Kwar</h4>
                            <p className="mb-1">This is a unique journey through a seldom visited part of Himachal, the Pabbar valley. Though the distance is almost 200km, the roads are in good condition upto Rohru. After that we’ll cross Chansal Ghati and reach Kwar before evening. Kwar is a large village with its own helipad and SDM. The temples at Dodra and Kwar are worth seeing: their exteriors are covered with the mounted heads of various wild animals, most of them a rarity nowadays. Overnight at Rest House.</p>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">29th May</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Kwar-Jhaka</h4>
                            <p className="mb-1">Continue up the Rupin on the next day, cross it at Jiskoon, and climb steadily to Jhaka, the hanging village. This is also the last village on the trail. Overnight at Trekker’s Hut.</p>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">30th May</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Jhakha-Dhanderas Thatch</h4>
                            <p className="mb-1">Today’s trek starts through the beautiful pine forests just after Jhaka, which eventually becomes more devoid of trees after Buras Kandi, a nice little campsite on the way. A short descent through a not so dense forest will take us to a large valley overlooking the waterfalls on the left of your trail. Just before Saruwas Thatch the trees gives way to meadows and it becomes a heavenly walk. Overnight at Tents, near the cascading waterfalls.</p>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">31st May</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Dhanderas Thatch-Upper Waterfall Camp</h4>
                            <p className="mb-1">It’ll be a mystery as to think how does one really goes through the waterfall, as you can’t really see any trail from a distance. Well, the trail actually goes right beside the waterfalls with some very steep sections. But you’ll be on top of the topmost waterfall in no time, and after another gradual 2 hours ascent, camp at Rato Pheri. Overnight at Tents.</p>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">1st June</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Waterfall Camp-Rupin Pass-Ronti Gad</h4>
                            <p className="mb-1">This is the day we were waiting for! Because we camp so near to the pass, we’ll be below the gully which leads to the pass within an hour of starting. Still fresh and early in the day, it shouldn’t take more than a hour to complete the final climb. The views toward Kinnaur is mind blowing. After a long but not so steep descent, we camp at Ronti Gad. Overnight at Tents.</p>
                          </div>
                        </div>
                      </div>
                      <div className="reason">
                        <div className="row">
                          <div className="col-2">
                            <div className="d-flex w-100 justify-content-between">
                              <h5 className="text-muted">2nd June</h5>
                            </div>
                          </div>
                          <div className="col-10">
                            <h4 className="text-primary">Ronti Gad-Sangla</h4>
                            <p className="mb-1">Today is another long day. But amidst beautiful open landscapes. The trail becomes wider as you come close to Sangla Kanda. Snagla will be another couple of hours of steep descent through the Rukti Gad valley. Overnight at a Hotel.</p>
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
                      <p>All meals from 28th May Dinner to 2nd June Breakfast. Meals will be veg and non-veg.</p>
                      <p>Transfer to Kwar from Sangla.</p>
                      <p>Deluxe Tourist Hotel in Sangla.</p>
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

export default RupinPassTrek;

export const rupinPassTrekQuery = graphql`
  query RupinPassTrekQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
