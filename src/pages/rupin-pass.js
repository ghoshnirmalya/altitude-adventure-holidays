import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { Card, CardHeader, CardText, CardBody, CardTitle } from 'reactstrap';
import classnames from 'classnames';

import RupinPassImage from '../assets/images/treks/rupin-pass.jpg';

class RupinPassTrek extends React.Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="trek">
        <div
          style={{ backgroundImage: `url(${RupinPassImage})` }}
          className="trek__image"
          alt="Card image"
        />
        <div className="container">
          <Helmet title={siteTitle} />
          <div className="row trek__name">
            <div className="col">
              <h1 className="text-center">Rupin Pass</h1>
            </div>
          </div>
          <Card style={{ marginBottom: "50px", border: "none" }}>
            <CardHeader style={{ border: "1px solid rgba(0, 0, 0, 0.125)" }}>Description</CardHeader>
            <CardBody>
              <CardText>
                <p>A superb trail for all kinds of adventurers, this classic trail connects Garhwal with Kinnaur district of Himachal. Cascading waterfalls, Ice Bridges, vast, undulating meadows, flocks of sheep, blue skies and sleepy hamlets…Rupin Pass trail has it all!</p>
                <p>Rather than the conventional starting point of Dhaula, we start from Kwar, in the Dodra-Kwar tehsil of Shimla district. This way we actually shorten the trek by a day and avoid the rather uneventful trail between Dhaula and Sewa. The trail follows the Rupin Gad all the way to the 3 connecting waterfalls above Dhanderas Thatch. You’ll be crossing over to Himachal just before Sewa village.</p>
                <p>The trail is full of Apple and Apricot trees. Also notice the typical Himachali architectures in the village of Jhaka. The Jhaka village is situated delicately in a small flat stretch of land in an otherwise steep slope. Making it look like a hanging village.</p>
                <p>Their should be some snow near the pass, especially in the Kinnur side. The final push to the pass is very steep, but that’s a very short section anyway. Climbing through the 3 waterfalls can be a bit risky, make sure you follow the guide’s prescribed path, won’t be wise to make your own path through the slippery rocks! Other than that, this trek is a fairly easy walk, but full of Breathtaking scenaries. And the best thing about the trek? Can be completed in a week’s Holiday from Delhi!</p>
              </CardText>
            </CardBody>
          </Card>
          <Card style={{ marginBottom: "50px", border: "none" }}>
            <CardHeader style={{ border: "1px solid rgba(0, 0, 0, 0.125)" }}>Itinerary</CardHeader>
            <CardBody>
              <CardText>
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h5>28th May: Shimla-Kwar</h5>
                    </div>
                    <p className="mb-1">This is a unique journey through a seldom visited part of Himachal, the Pabbar valley. Though the distance is almost 200km, the roads are in good condition upto Rohru. After that we’ll cross Chansal Ghati and reach Kwar before evening. Kwar is a large village with its own helipad and SDM. The temples at Dodra and Kwar are worth seeing: their exteriors are covered with the mounted heads of various wild animals, most of them a rarity nowadays. Overnight at Rest House.</p>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h5>29th May: Kwar-Jhaka</h5>
                    </div>
                    <p className="mb-1">Continue up the Rupin on the next day, cross it at Jiskoon, and climb steadily to Jhaka, the hanging village. This is also the last village on the trail. Overnight at Trekker’s Hut.</p>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h5>30th May: Jhakha-Dhanderas Thatch</h5>
                    </div>
                    <p className="mb-1">Today’s trek starts through the beautiful pine forests just after Jhaka, which eventually becomes more devoid of trees after Buras Kandi, a nice little campsite on the way. A short descent through a not so dense forest will take us to a large valley overlooking the waterfalls on the left of your trail. Just before Saruwas Thatch the trees gives way to meadows and it becomes a heavenly walk. Overnight at Tents, near the cascading waterfalls.</p>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h5>31st May: Dhanderas Thatch-Upper Waterfall Camp</h5>
                    </div>
                    <p className="mb-1">It’ll be a mystery as to think how does one really goes through the waterfall, as you can’t really see any trail from a distance. Well, the trail actually goes right beside the waterfalls with some very steep sections. But you’ll be on top of the topmost waterfall in no time, and after another gradual 2 hours ascent, camp at Rato Pheri. Overnight at Tents.</p>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h5>1st June: Waterfall Camp-Rupin Pass-Ronti Gad</h5>
                    </div>
                    <p className="mb-1">This is the day we were waiting for! Because we camp so near to the pass, we’ll be below the gully which leads to the pass within an hour of starting. Still fresh and early in the day, it shouldn’t take more than a hour to complete the final climb. The views toward Kinnaur is mind blowing. After a long but not so steep descent, we camp at Ronti Gad. Overnight at Tents.</p>
                  </li>
                  <li className="list-group-item">
                    <div className="d-flex w-100 justify-content-between">
                      <h5>2nd June: Ronti Gad-Sangla</h5>
                    </div>
                    <p className="mb-1">Today is another long day. But amidst beautiful open landscapes. The trail becomes wider as you come close to Sangla Kanda. Snagla will be another couple of hours of steep descent through the Rukti Gad valley. Overnight at a Hotel.</p>
                  </li>
                </ul>
              </CardText>
            </CardBody>
          </Card>
          <Card style={{ marginBottom: "50px", border: "none" }}>
            <CardHeader style={{ border: "1px solid rgba(0, 0, 0, 0.125)" }}>What's included</CardHeader>
            <CardBody>
              <CardText>
                <p>All meals from 28th May Dinner to 2nd June Breakfast. Meals will be veg and non-veg.</p>
                <p>Transfer to&nbsp;Kwar from Sangla.</p>
                <p>Deluxe Tourist Hotel in&nbsp;Sangla.</p>
                <p>Expert bilingual guide.</p>
                <p>Services of Porters/Mules to carry all group and personal gear.</p>
                <p>Services of Cooking Staff.</p>
                <p>Group medical kit.</p>
                <p>Good quality accommodation at Trekker’s Huts/Tents during trek.</p>
                <p>Private transportation.</p>
                <p>All park entrance fees and trekking permits.</p>
              </CardText>
            </CardBody>
          </Card>
        </div>
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
