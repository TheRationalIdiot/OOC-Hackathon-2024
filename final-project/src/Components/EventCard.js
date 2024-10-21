import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EventCard = ({ event }) => {
  return (
    <div className="card mb-3 shadow-sm" style={{ maxWidth: '540px', margin: '0 auto' }}>
      <div className="row g-0">
        <div className="col-4">
          <img src={event.image} alt={event.name} className="img-fluid rounded-start" />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5 className="card-title">{event.name}</h5>
            <p className="card-text">
              <strong>Location:</strong> {event.location}<br />
              <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
