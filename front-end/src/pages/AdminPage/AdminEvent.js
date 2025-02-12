import React, { useState, useEffect } from 'react';
import { Container, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { Helmet } from 'react-helmet-async';

function AdminEvent () {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({ title: '', date: '' });
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchEvents();
  }, [isAuthenticated]);

  const authenticate = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/v1/validate-admin', { password });
    if (response.status === 200) {
        setIsAuthenticated(true);
        fetchEvents();
    } else {
      setAuthError('Incorrect password.');
    };
  };

  const fetchEvents = async () => {
    try {
      const response = await axios.get('/api/v1/events');
      setEvents(response.data);
    } catch (err) {
      console.error('Failed to fetch events:', err);
    };
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/v1/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error('Failed to delete event:', err);
    };
  };

  const handleEdit = (event) => {
    setSelectedEvent(event);
    setModalData({ title: event.title, date: event.date });
    setSelectedDate(new Date(event.date));
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const handleSaveChanges = async () => {
    try {
      await axios.put(`/api/v1/events/${selectedEvent.id}`, modalData);
      fetchEvents();
      handleModalClose();
    } catch (err) {
      console.error('Failed to update event:', err);
    };
  };

  if (!isAuthenticated) {
    return (
      <Container className="h-100">
        <Row className="justify-content-center align-items-center h-100">
          <Col md={6}>
            <Form className="mt-5 pt-5" onSubmit={authenticate}>
              <Form.Group className="mt-2">
                <Form.Label>Admin Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  autoComplete="off"
                  placeholder="Enter admin password"
                  onChange={e => setPassword(e.target.value)}
                />
              </Form.Group>
              {authError && <div className="text-danger mt-2">{authError}</div>}
              <Button type="submit" className="mt-4 mb-5">
                Authenticate
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <>
        <Helmet>
        <title>Admin Page | Events</title>
        </Helmet>
        
        <Container>
        <h2>Manage Events</h2>
        {events.map(event => (
            <div key={event.id}>
            <p>Title: {event.title}</p>
            <p>Date: {event.date}</p>
            <Button onClick={() => handleEdit(event)}>Edit</Button>
            <Button variant="danger" onClick={() => handleDelete(event.id)}>
                Delete
            </Button>
            <hr />
            </div>
        ))}

        <Modal show={showModal} onHide={handleModalClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Event</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            type="text"
                            value={modalData.title}
                            onChange={(e) => setModalData({ ...modalData, title: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Date</Form.Label>
                        <DatePicker
                        className="form-control"
                        selected={selectedDate}
                        onChange={(date) => {
                            setSelectedDate(date);
                            setModalData(prevState => ({ ...prevState, date: date.toISOString() }));
                         }}                         
                        showTimeSelect
                        dateFormat="Pp"
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSaveChanges}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        </Container>
    </>
  );
};

export default AdminEvent;
