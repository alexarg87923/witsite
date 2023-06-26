import React from 'react';
import { Helmet } from 'react-helmet';
import { Wrapper } from './AboutStyles';

function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <Wrapper>
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <div className="container section-title" data-aos="fade-up">
                <h2>About Us</h2>
              </div>
              <h3 className="section-subheading text-muted">
                Women in Tech MDC's mission is to empower underrepresented
                groups in the STEM field through workshops, speaker panels, peer
                <br />
                projects, and career assistance, paving the way for all women
                and non-binary individuals to step into their tech journey.
              </h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  {/* <img
                    className="rounded-circle img-fluid"
                    src="assets/img/about/1.jpg"
                    alt="..."
                  /> */}
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>Nov 2022</h4>
                    <h4 className="subheading">Inception and Ideals</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      At Women in Tech MDC, our inception and ideals stem from a
                      vision to champion diversity in STEM. Born from our
                      founder's personal experiences with the lack of support
                      for women and non-binary individuals, we're dedicated to
                      being change-makers in tech. We provide a platform for
                      exploration, growth, and success, through initiatives like
                      workshops, speaker panels, and career assistance,
                      fostering an environment of empowerment and inclusion.
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  {/* <img
                    className="rounded-circle img-fluid"
                    src="assets/img/about/2.jpg"
                    alt="..."
                  /> */}
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2023</h4>
                    <h4 className="subheading">Landmark Achievements</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      A highlight in our journey at Women in Tech MDC has been
                      our participation and volunteer work at WiCS, an event
                      hosted by a fellow change-maker club at FIU. This was an
                      opportunity for our community to collaborate, share, and
                      learn on a larger scale, further cementing our commitment
                      to advancing women and non-binary individuals in the tech
                      industry. The experience was not only rewarding, but it
                      also significantly contributed to our growth as a chapter,
                      showcasing the strength of unity and the power of shared
                      vision in achieving our goals.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  {/* <img
                    className="rounded-circle img-fluid"
                    src="assets/img/about/3.jpg"
                    alt="..."
                  /> */}
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>PRESENT</h4>
                    <h4 className="subheading">Present and Future Horizons</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Women in Tech MDC stands today as a transformative
                      community, with members actively contributing to and
                      progressing in the tech industry. We celebrate our
                      successes while recognizing the journey ahead. As we look
                      to the future, our aim is to expand and continually adapt
                      to the evolving needs of our members, staying committed to
                      our mission of inclusivity and empowerment. We envision a
                      future where diversity in tech is the norm, and we're
                      actively taking steps to make that a reality.
                    </p>
                  </div>
                </div>
              </li>
              {/* <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="rounded-circle img-fluid"
                    src="assets/img/about/4.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>PRESENT</h4>
                    <h4 className="subheading">Journey & Evolution</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li> */}

              <li className="timeline-inverted">
                <a href="https://sharknet.mdc.edu/organization/witmdc">
                  <div className="timeline-image">
                    <h4>
                      Be Part
                      <br />
                      Of Our
                      <br />
                      Story!
                    </h4>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </Wrapper>
    </>
  );
}

export default About;
