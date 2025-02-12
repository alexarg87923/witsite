import React from 'react';

import { Wrapper } from './HeroStyles.js';

function Hero () {
  return (
    <Wrapper>
      <header className="masthead">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-6">
              <div className="text-center text-white">
                <h1 className="mb-5">
                  Empowering the Future of Tech: Women and Non-Binary Voices in
                  STEM
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-center">
                  <a
                    className="btn btn-primary btn-lg px-4 me-sm-3"
                    href="https://sharknet.mdc.edu/organization/witmdc"
                  >
                    Apply Now!
                  </a>
                  <a className="btn btn-light btn-lg px-4" href="#features">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Hero;
