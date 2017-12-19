import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import { Card, CardHeader, CardText, CardBody, CardTitle } from 'reactstrap';
import classnames from 'classnames';

import RoopkundAndRontiSaddleImage from '../assets/images/treks/roopkund-and-ronti-saddle.jpg';

class RoopkundAndRontiSaddle extends React.Component {
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
          style={{ backgroundImage: `url(${RoopkundAndRontiSaddleImage})` }}
          className="trek__image"
          alt="Card image"
        />
        <div className="container">
          <Helmet title={siteTitle} />
          <div className="row trek__name">
            <div className="col">
              <h1 className="text-center">Roopkund and Ronti Saddle</h1>
            </div>
          </div>
          <Card style={{ marginBottom: "50px", border: "none" }}>
            <CardHeader style={{ border: "1px solid rgba(0, 0, 0, 0.125)" }}>Description</CardHeader>
            <CardBody>
              <CardText>
                <p>Most popular trek in Indian Himalaya. Possibly the trail which receives most footfall throughout a season too. But there’s a reason why people all around the globe flock to this skeleton lake and beyond, it’s insanely beautiful!</p>
                  <p>Some of India’s best high altitude meadows, Ali and Bedini Bugyal will greet you with vast, undulating grasslands. Some of India’s most famous peaks, Trishul, Nandaghunti, Chowkhamba and Neelkantha will be guarding the trail. And while descending, you’ll get the chance of visiting some of Indian Himalaya’s oldest and cutest villages.</p>
                  <p>Jungles, Peaks, Meadows, Snow Walk, High Altitude Lake…Roopkund is a trek of a lifetime.</p>
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
                          <h5>4th June: Arrival at Lohajung</h5>
                        </div>
                        <p className="mb-1">We meet in the evening at the Trekker’s Hut. Wherever you’re coming from, make sure you start early, especially if coming from Kathgodam/Haldwani. After a short briefing and a Hot Dinner, we retire early tonight. Overnight at Trekker’s Hut.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>5th June: Lohajung-Wan-Ali Bugyal</h5>
                        </div>
                        <p className="mb-1">After a healthy Breakfast, we hop on our ride for the short drive to Wan. Short, but bumpy and full of beautiful views. Wan makes the starting point of our trek, and we start on a cemented path and after a short descent to the Neel Ganga bridge, it’s all the way up through dense Oak and Rhododendron jungles upto just before Ali Bugyal, where the trail evens out to an opening and the vast, never ending expanse of Ali Bugyal welcomes you. Overnight at Trekker’s Hut/Tents.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>6th June: Ali-Bedini Bugyal</h5>
                        </div>
                        <p className="mb-1">After yesterday’s exertions, today’s walk of 5km will be like walking through heaven. It’s only 5km, but will take us almost 3 hours. Not beacuse of steepness of the trail, but because of the pure bliss around us. We’ll be walking through long stretches of meadows in an easy, even ground. One Bugyal to another, Bedini offers superb views all around, once again. Overnight at Tents.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>7th June: Bedini-Baguabasa</h5>
                        </div>
                        <p className="mb-1">After a short climb, a gradual walk of 2-3 hours will take you to Pathar Nachuni, another famous camping spot. We’ll be having our packed lunch here, before embarking on a lung-busting ascent of 2 hours to Kalu Binayak top. After a that it’s a short descent to Baguabasa camping ground. Overnight at Trekker’s Hut/Tents.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>8th June: Baguabasa-Roopkund-Junargali Col-Shilasamudra</h5>
                        </div>
                        <p className="mb-1">Morning will be very cold, but we brave the cold anyway and start nice and early. A steep climb of 2-3 hours will take us to the Skeleton Lake, Roopkund. After a small puja and Photo session, we’ll climb to Junargali Col, another sharp ascent of 15-20 minutes. After another Photo session, we start the long, steep descent to Shila Samudra. Overnight at Tents.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>9th June: Shilasamudra-Dodang</h5>
                        </div>
                        <p className="mb-1">Another long day. But unlike yesterday, today’s trail is mostly gradual at first, but after traversing the Shilasamudra glacier, we gain a fair bit of altitude to camp at Dodang, just after Chota Homekund. Overnight at Tents.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>10th June: Dodang-Homekund-Ronti Saddle-Dodang</h5>
                        </div>
                        <p className="mb-1">The D-Day. We start nice and early once again, and a gradual ridgewalk will take us to Homekund, the holy destination of the sacred Nandadevi Raj Jat Yatra. After a small puja at the temple there, we climb for another 2-3 hours to the pinnacle of our trek, Ronti Saddle. Fascinating views of the Nandaghunti and Ronti peaks from the top. The descend is tricky, once again. Overnight at Tents.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>11th June: Dodang-Latkhopri</h5>
                        </div>
                        <p className="mb-1">Today is all the way down to the forests of Latkhopri. Though it’s mostly down and flat, we’ll cover a lot of distances today. Today is also the last camping day. We’ll celebrate with a nice campfire this evening. Overnight at Tents.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>12th June: Latkhopri-Sutol-Karnprayag</h5>
                        </div>
                        <p className="mb-1">More jungle walking. But afterward, the dense jungle gives way to some picturesque villages like Tattar and Sutol. From Sutol it’s a 3-4 hour drive to Karnprayag. Overnight at a Hotel.</p>
                      </li>
                      <li className="list-group-item">
                        <div className="d-flex w-100 justify-content-between">
                          <h5>13th June: Reserve Day</h5>
                        </div>
                      </li>
                    </ul>
              </CardText>
            </CardBody>
          </Card>
          <Card style={{ marginBottom: "50px", border: "none" }}>
            <CardHeader style={{ border: "1px solid rgba(0, 0, 0, 0.125)" }}>What's included</CardHeader>
            <CardBody>
              <CardText>
                <p>All meals from 4th June Dinner to 13th June Breakfast. Meals will be veg and non-veg.</p>
                <p>Transfers to Wan from Lohajung and from Sutol to Karnprayag.</p>
                <p>Deluxe Tourist Hotel in Lohajung and Karnprayag.</p>
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

export default RoopkundAndRontiSaddle;

export const roopkundAndRontiSaddleQuery = graphql`
  query RoopkundAndRontiSaddleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
