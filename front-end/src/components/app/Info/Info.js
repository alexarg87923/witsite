import React from 'react';
import { Wrapper } from './InfoStyles.js';

function Hero() {
  return (
    <Wrapper>
      <section id="features" className="features-icons bg-light text-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-mortarboard-fill m-auto"></i>
                </div>
                <h3 style={{ color: 'red' }}>Guiding Your Journey</h3>
                <p className="lead mb-0">
                  At Women in Tech MDC, we believe mentorship is key. We connect
                  you with seasoned tech professionals who can provide guidance
                  and insights, helping you navigate the STEM journey with
                  confidence.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-graph-up-arrow m-auto"></i>
                </div>
                <h3 style={{ color: 'red' }}>
                  Enhancing Your Skills, Unlocking Opportunities
                </h3>
                <p className="lead mb-0">
                  We're committed to your growth. Through workshops, career
                  assistance, and collaborative projects, we offer you resources
                  to develop essential tech skills and enhance your career
                  opportunities.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                  <i className="bi-people-fill m-auto"></i>
                </div>
                <h3 style={{ color: 'red' }}>
                  Building an Inclusive Tech Community
                </h3>
                <p className="lead mb-0">
                  Our community is your safe space. From networking
                  opportunities to collaborative events and meetups, we provide
                  a supportive environment where you can connect, learn, and
                  grow together with peers and industry experts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Hero;
