// src/pages/EventCalendar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row, Col, Container, Button } from 'react-bootstrap';
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameDay,
  isSameMonth,
} from 'date-fns';
import events from '../data/events'; // Import event data from external file
import './calender.css';

const EventCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const navigate = useNavigate();

  const handleDayClick = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  const renderHeader = () => (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <Button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>
        Prev
      </Button>
      <h2>{format(currentMonth, 'MMMM yyyy')}</h2>
      <Button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
        Next
      </Button>
    </div>
  );

  const renderDays = () => {
    const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
      <div className="row">
        {weekDays.map((day) => (
          <div className="col text-center" key={day}>
            {day}
          </div>
        ))}
      </div>
    );
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = format(day, 'yyyy-MM-dd');
        const isEventDay = events.some((event) =>
          isSameDay(new Date(event.date), day)
        );
        const event = events.find((event) => isSameDay(new Date(event.date), day));

        days.push(
          <div
            className={`col cell p-2 text-center ${
              !isSameMonth(day, monthStart) ? 'text-muted' : ''
            } ${isEventDay ? 'event-day' : ''}`}
            key={day}
            onClick={isEventDay ? () => handleDayClick(event.id) : null}
          >
            <span className="number">{format(day, 'd')}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  return (
    <Container>
      {renderHeader()}
      <div className="calendar">
        {renderDays()}
        {renderCells()}
      </div>
    </Container>
  );
};

export default EventCalendar;
