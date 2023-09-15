import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function AddEvents() {
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({ title: '', password: '' });

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post('/api/v1/addevents', { ...formData, date: startDate })
      .then(res => {
        if (res.status === 200) {
          toast.success('Operation successful!', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        } else {
          toast.error('There was an error, if this persist contact Alex!', {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        }
      });
  };

  const handleChange = e => {
    setFormData(prevData => ({
      ...prevData,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      <Helmet>
        <title>Secret Route</title>
      </Helmet>
      <Container className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col md={6}>
            <Form className="mt-5 pt-5" onSubmit={handleSubmit}>
              <Form.Group className="mt-2">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  autoComplete="off"
                  onChange={e => handleChange(e)}
                />
              </Form.Group>
              <Form.Group className="mt-2">
                <Form.Label>Date and Time</Form.Label>
                <div>
                  <DatePicker
                    className="form-control"
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    showTimeSelect
                    dateFormat="Pp"
                  />
                </div>
              </Form.Group>

              <Form.Group className="mt-2">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Password provided by Alex"
                  onChange={e => handleChange(e)}
                />
              </Form.Group>
              <Button type="submit" className="mt-4 mb-5">
                Add Event
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
