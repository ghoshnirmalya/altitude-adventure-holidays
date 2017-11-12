import React from 'react';
import Link from 'gatsby-link';

import Slider from '../slider';

import RupinPassImage from '../../assets/images/treks/rupin-pass.jpg';
import RoopkundAndRontiSaddleImage from '../../assets/images/treks/roopkund-and-ronti-saddle.jpg';
import BhabaPassImage from '../../assets/images/treks/bhaba-pass.jpg';
import ParangLaImage from '../../assets/images/treks/parang-la.jpg';
import MandaniValleyAndMadhyamaheswarImage from '../../assets/images/treks/mandani-valley-and-madhyamaheswar.jpg';
import KedartalImage from '../../assets/images/treks/kedartal.jpg';
import GoechaLaImage from '../../assets/images/treks/goecha-la.jpg';
import SingalilaPassAndPhokteyImage from '../../assets/images/treks/singalila-pass-and-phoktey.jpg';

const Treks = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center full-width-section__header">
          <h2>Upcoming Treks</h2>
          <p className="lead">See all our upcoming treks</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Slider>
            <div className="slider">
              <Link to="/rupin-pass">
                <div className="card text-center bg-dark text-white">
                  <img
                    className="card-img-top"
                    src={RupinPassImage}
                    alt="Card image cap"
                  />
                  <div className="card-img-overlay">
                    <div className="card-header">
                      <h4 className="card-title">Rupin Pass</h4>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span>May 28 – June 2</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider">
              <Link to="/treks">
                <div className="card text-center bg-dark text-white">
                  <img
                    className="card-img-top"
                    src={RoopkundAndRontiSaddleImage}
                    alt="Card image cap"
                  />
                  <div className="card-img-overlay">
                    <div className="card-header">
                      <h4 className="card-title">Roopkund and Ronti Saddle</h4>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span>June 4 – June 13</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider">
              <Link to="/treks">
                <div className="card text-center bg-dark text-white">
                  <img
                    className="card-img-top"
                    src={BhabaPassImage}
                    alt="Card image cap"
                  />
                  <div className="card-img-overlay">
                    <div className="card-header">
                      <h4 className="card-title">Bhaba Pass</h4>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span>August 13 – August 19</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider">
              <Link to="/treks">
                <div className="card text-center bg-dark text-white">
                  <img
                    className="card-img-top"
                    src={ParangLaImage}
                    alt="Card image cap"
                  />
                  <div className="card-img-overlay">
                    <div className="card-header">
                      <h4 className="card-title">Parang La</h4>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span>July 10 – July 20</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider">
              <Link to="/treks">
                <div className="card text-center bg-dark text-white">
                  <img
                    className="card-img-top"
                    src={MandaniValleyAndMadhyamaheswarImage}
                    alt="Card image cap"
                  />
                  <div className="card-img-overlay">
                    <div className="card-header">
                      <h4 className="card-title">Mandani Valley and Madhyamaheswar</h4>
                    </div>
                  </div>
                  <div className="card-footer">
                    <span>September 10 – September 23</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="slider">
              <Link to="/treks">
                <div className="card text-center bg-dark text-white">
                  <img
                    className="card-img-top"
                    src={KedartalImage}
                    alt="Card image cap"
                  />
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
            <div className="slider">
              <Link to="/treks">
                <div className="card text-center bg-dark text-white">
                  <img
                    className="card-img-top"
                    src={GoechaLaImage}
                    alt="Card image cap"
                  />
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
            <div className="slider">
              <Link to="/treks">
                <div className="card text-center bg-dark text-white">
                  <img
                    className="card-img-top"
                    src={SingalilaPassAndPhokteyImage}
                    alt="Card image cap"
                  />
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
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Treks;
