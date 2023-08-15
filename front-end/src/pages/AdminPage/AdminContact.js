import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';

function AdminContact() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState([]);
  const [error, setError] = useState('');

  const handleLogin = async e => {
    try {
      e.preventDefault();
      const response = await axios.post('/api/v1/validate-admin', { password });
      if (response.status === 200) {
        setAuthenticated(true);
        fetchSubmissions();
      }
    } catch (err) {
      setError('Failed to authenticate');
    }
  };

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get('/api/v1/contact-submissions');
      setSubmissions(response.data);
    } catch (err) {
      setError('Failed to fetch submissions');
    }
  };

  if (!authenticated) {
    return (
      <>
      <Helmet>
        <title>Admin Page | Contact</title>
      </Helmet>

        <Container className="h-100">
          <Row className="justify-content-center align-items-center h-100">
            <Col md={6}>
              <Form className="mt-5 pt-5" onSubmit={handleLogin}>
                <Form.Group className="mt-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Password provided by Alex"
                    onChange={e => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit" className="mt-4 mb-5">
                  Login
                </Button>
                {error && <div className="mt-3 text-danger">{error}</div>}
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }

  return (
    <>
      <Helmet>
      <title>Admin Page | Contact</title>
      </Helmet>

      <Container>
        <h2 style={{ color: 'red' }} >Contact Form Submissions</h2>
        {submissions.map(submission => (
          <div key={submission.id}>
            <p>Name: {submission.name}</p>
            <p>Email: {submission.email}</p>
            <p>Subject: {submission.subject}</p>
            <p>Message: {submission.message}</p>
            <hr />
          </div>
        ))}
      </Container>
    </>
  );
}

export default AdminContact;
