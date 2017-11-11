import React from 'react';
import Link from 'gatsby-link';

const Blogs = () => (
  <div className="container">
    <div className="row">
      <div className="col blogs">
        {/*start*/}
        <div className="blogs__blog">
          <Link to="/leave-only-footprints-behind" className="blog__link">
            <div className="media">
              <div className="media-body">
                <h3 className="blog__title">Leave ‘only’ Footprints Behind</h3>
                <p className="blog__body text-muted">We live in a time when we’ve gone beyond ‘pollution’ and ‘global warming’. Through repetitive and unfruitful use, we’re truly and surely bored of our ‘diplomatic’ effort of saving the earth. We’ve thought about reducing carbon footprints, we’ve Googled about renewable energy sources, some of us even pondered at the thought of replacing his Motorcycle with an e-bike!</p>
              </div>
            </div>
          </Link>
        </div>
        {/*end*/}
        {/*start*/}
        <div className="blogs__blog">
          <Link to="/the-skeleton-lake-roopkund" className="blog__link">
            <div className="media">
              <div className="media-body">
                <h3 className="blog__title">The Skeleton Lake – Roopkund</h3>
                <p className="blog__body text-muted">Team Altitude started for Roopkund, with 8 members from Kolkata on 10th October, 2013. We reached Lohajung(8,300 ft) on 12th evening. our guide Padam Singh joined us along with 1 cook(Amar Singh) and 4 porters(Gabbar, Kali, Padam & Harpal). So we became a team of 7 members along with 7 support stuffs(Me and Padam Singh included).</p>
              </div>
            </div>
          </Link>
        </div>
      {/*end*/}
      {/*start*/}
        <div className="blogs__blog">
          <Link to="/major-peaks-of-indian-himalayas" className="blog__link">
            <div className="media">
              <div className="media-body">
                <h3 className="blog__title">Major peaks of Indian Himalayas</h3>
                <p className="blog__body text-muted">The Himalayas stretch across the northeastern portion of India. They cover approximately 1,500 mi (2,400 km) and pass through the nations of India, Pakistan, Afghanistan, China, Bhutan and Nepal.
</p>
              </div>
            </div>
          </Link>
        </div>
      {/*end*/}
      </div>
    </div>
  </div>
);

export default Blogs;
