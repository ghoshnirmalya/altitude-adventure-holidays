import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import get from 'lodash/get';

import Footer from '../components/footer';

import '../styles/pages/index.scss';

import Mountain1Image from '../assets/icons/mountains.png';
import Mountain2Image from '../assets/icons/mountains-1.png';
import Mountain3Image from '../assets/icons/mountains-2.png';
import Mountain4Image from '../assets/icons/mountains-3.png';

class IndexPage extends React.Component {

  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title');

    return (
      <div className="index-page">
        <Helmet title={siteTitle} />
        <div className="jumbotron jumbotron-fluid text-center">
          <div className="container">
            <h1 className="display-3">Altitude Adventure Holidays</h1>
            <p className="lead">Adventure holidays in Indian Himalaya</p>
            <Link
              to="/about"
              className="btn btn-primary btn-lg"
            >
              Know More
            </Link>
          </div>
        </div>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col text-center full-width-section__header">
                <h2>Why us</h2>
                <p className="lead">4 reasons why you should plan your next trip with us</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
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
              <div className="col">
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
        </section>
        <section className="full-width-section">
          <div className="container">
            <div className="row">
              <div className="col text-center full-width-section__header">
                <h2>Upcoming Treks</h2>
                <p className="lead">See all our upcoming treks</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Link to="/treks">
                  <div className="card text-center bg-dark text-white">
                    <img className="card-img-top" src="http://altitudeadventureholidays.com/wp-content/uploads/2016/05/IMG_1068.jpg" alt="Card image cap" />
                    <div className="card-img-overlay">
                      <div className="card-header">
                        <h4 className="card-title">Kedartal</h4>
                      </div>
                    </div>
                    <div className="card-footer">
                      <span>September 24 – October 1</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/treks">
                  <div className="card text-center bg-dark text-white">
                    <img className="card-img-top" src="http://altitudeadventureholidays.com/wp-content/uploads/2016/05/IMG_1068.jpg" alt="Card image cap" />
                    <div className="card-img-overlay">
                      <div className="card-header">
                        <h4 className="card-title">Goecha La</h4>
                      </div>
                    </div>
                    <div className="card-footer">
                      <span>November 5 – November 14</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col">
                <Link to="/treks">
                  <div className="card text-center bg-dark text-white">
                    <img className="card-img-top" src="http://altitudeadventureholidays.com/wp-content/uploads/2016/05/IMG_1068.jpg" alt="Card image cap" />
                    <div className="card-img-overlay">
                      <div className="card-header">
                        <h4 className="card-title">Singalila Pass & Phokteydara</h4>
                      </div>
                    </div>
                    <div className="card-footer">
                      <span>December 23 – December 30</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col text-center mt-5">
                <Link
                  to="/treks"
                  className="btn btn-outline-dark"
                >
                  View all upcoming Treks
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
