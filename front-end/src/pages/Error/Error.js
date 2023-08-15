import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>

      <Row className="flex-center justify-content-center py-6">
        <Col sm={11} md={9} lg={7} xl={6} className="col-xxl-5">
          <Card className="text-center mt-5">
            <Card.Body className="p-5">
              <div className="display-1 text-300">404</div>
              <p className="lead mt-4 text-800 font-sans-serif fw-semi-bold">
                The page you're looking for is not found.
              </p>
              <hr />
              <p>
                Make sure the address is correct and that the page hasn't moved.
                If you think this is a mistake,
                <a href="/contact" className="ms-1">
                  contact us
                </a>
                .
              </p>
              <Link className="btn btn-primary btn-sm mt-3" to="/">
                <i className="bi bi-house-fill m-auto me-1"></i>
                Take me home
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
