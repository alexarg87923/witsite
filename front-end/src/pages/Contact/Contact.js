import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Wrapper } from './ContactStyles';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
  
    axios
      .post('/api/v1/contact', formData)
      .then(response => {
        if (response.status === 200) {
          setMessageSent(true);
        } else {
          setError('An unexpected response was received.');
        }
      })
      .catch(error => {
        console.error(error);
        setError('An error occurred while sending the message. Please try again.');
      })
      .finally(() => {
        setLoading(false);
      });
  };
  

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>

      <Wrapper>
      <section id="contact" className="mt-5 mb-5">
        <Container className="section-title">
          <h2>Contact</h2>
          <p>
            Got questions or want to connect? We'd love to hear from you!
            Contact us now!
          </p>
        </Container>

        <Container>
          <Row className="justify-content-center">
            <Col lg={6}>
              <Form onSubmit={handleSubmit} className="email-form">
                <Row className="gy-4">
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </Col>
                  <Col md={12}>
                    <Form.Control
                      as="textarea"
                      name="message"
                      rows={6}
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                    />
                  </Col>
                  <Col md={12} className="text-center">
                    {loading && <div>Loading</div>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    {messageSent && <Alert variant="success">Your message has been sent. Thank you!</Alert>}

                    <Button type="submit" disabled={loading}>
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      </Wrapper>
    </>
  );
}

export default Contact;
