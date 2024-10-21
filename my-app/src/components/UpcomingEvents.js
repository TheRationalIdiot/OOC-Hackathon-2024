// src/components/UpcomingEvents.js
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import EventCard from './EventCard';
import events from '../data/events'; // Import event data

const UpcomingEvents = () => {
  return (
    <Container className="my-5">
      <h2>Upcoming Events</h2>
      <Row>
        {events.map((event) => (
          <Col key={event.id} md={4} className="mb-4">
            <EventCard event={event} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UpcomingEvents;