import React from 'react';
import './memories.css'; // Import the CSS file

const Memories = () => {
  const memories = [
    { image: "https://example.com/memory1.jpg", date: "1st Oct, 2023" },
    { image: "https://example.com/memory2.jpg" },
    { image: "https://example.com/memory3.jpg" },
    { image: "https://example.com/memory4.jpg" },
  ];

  return (
    <div className="memories-container">
      <div className="memories-header">
        <i className="fa fa-arrow-left"></i> Your Memories
      </div>

      <div className="main-memory">
        <img src={memories[0].image} alt="Main Memory" className="main-memory-image" />
        <p className="memory-date">{memories[0].date}</p>
      </div>

      <div className="memory-grid">
        {memories.slice(1).map((memory, index) => (
          <div className="memory-grid-item" key={index}>
            <img src={memory.image} alt={`Memory ${index + 1}`} className="grid-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Memories;
