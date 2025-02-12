import React from 'react';
import { Wrapper } from './AboutUsStyles.js';
import img from '../../../assets/images/pillars.png';

function Hero() {
  return (
    <Wrapper>
      <section id="about" className="about pt-0 mt-5">
        <div className="container" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
              <img src={img} className="img-fluid" alt="graph" />
            </div>
            <div className="col-lg-6 content order-last order-lg-first mt-5">
              <h3 style={{ color: 'red' }}>About Us</h3>
              <p>
                Women in Tech MDC is more than just a community; it's a movement
                for change in the STEM field. We work tirelessly to close the
                gender gap and increase representation of women and non-binary
                individuals in tech. Our focus is not just on individual growth,
                but on systemic change to create a more inclusive, diverse and
                equitable tech industry.
              </p>
              <ul>
                <li data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-megaphone-fill"></i>
                  <div>
                    <h5 style={{ color: 'orange' }}>Advocacy</h5>
                    <p>
                      Our organization is dedicated to championing the cause of
                      gender equality in tech. We raise awareness about the
                      challenges women and non-binary individuals face in STEM
                      and advocate for changes in policies and practices to
                      address these issues.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-puzzle-fill"></i>
                  <div>
                    <h5 style={{ color: 'rgb(154, 0, 56)' }}>Collaboration</h5>
                    <p>
                      We believe in the power of partnerships. Our collaboration
                      with tech companies, educational institutions, and other
                      non-profits has allowed us to extend our impact and
                      provide a wide range of opportunities for our members.
                    </p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-lightbulb-fill"></i>
                  <div>
                    <h5 style={{ color: 'red' }}>Continuous Learning</h5>
                    <p>
                      At Women in Tech MDC, we understand that the tech industry
                      is always evolving. Therefore, we encourage and facilitate
                      continuous learning and upskilling among our members to
                      ensure they stay competitive and relevant in the
                      ever-changing tech landscape.
                    </p>
                  </div>
                </li>
                <li
                  className="d-flex justify-content-center"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <a href="https://sharknet.mdc.edu/organization/witmdc">
                    <button className="btn btn-danger py-2 px-3">
                      I want in!
                    </button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
}

export default Hero;
