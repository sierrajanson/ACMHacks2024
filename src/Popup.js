import React from 'react';
import PropTypes from 'prop-types';
import './App.css'; // Make sure you have this CSS file for styles

const Popup = ({ name, people, iaq, temperature, onClose }) => {
  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-button" onClick={onClose}>
          &times; {/* X symbol for close button */}
        </button>
        <h2>{name}</h2>
        <p><strong>People Count:</strong> {people}</p>
        <p><strong>Indoor Air Quality:</strong> {iaq}</p>
        <p><strong>Temperature:</strong> {temperature} °F</p>
        <hr />
        <h3>Suggestions</h3>
        <p>🔥 Keep the doors open for ventilation!</p>
        <p>🌀 Use fans to improve air circulation!</p>

      </div>
    </div>
  );
};

Popup.propTypes = {
  name: PropTypes.string.isRequired,
  people: PropTypes.number.isRequired,
  iaq: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
