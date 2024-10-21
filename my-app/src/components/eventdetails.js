// src/components/EventDetails.js
import React from 'react';
import { Card, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: 'Music Festival',
    date: '2024-10-21',
    description: 'A great music festival with famous bands.',
  },
  {
    id: 2,
    title: 'Art Exhibition',
    date: '2024-10-22',
    description: 'An exhibition showcasing contemporary art.',
  },
  {
    id: 3,
    title: 'Tech Conference',
    date: '2024-11-05',
    description: 'A conference for technology enthusiasts.',
  },
];

const EventDetails = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <h2>Event not found!</h2>;
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>Date: {event.date}</Card.Text>
          <Card.Text>{event.description}</Card.Text>
          <Button variant="primary">Buy Tickets</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default EventDetails;
