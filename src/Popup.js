import React from 'react';
import PropTypes from 'prop-types';
import './App.css'; // Make sure you have this CSS file for styles

const Popup = ({ name, people, iaq, temperature, onClose }) => {

  const suggestion = (temperature) =>{
    console.log(temperature);
    if (temperature != undefined){
      if (temperature > 75){
        return ( <p>🌀 Turn on the AC. </p>);
      } else if (temperature < 55){
        return ( <p>🔥 Turn the heat up! </p>);
      } else {
        return (<p>✅ Temperature good.</p>);
      }
    }
    else{
      return (<p>Loading...</p>)
    }

  }
  const suggestionPeople = (people) =>{
    if (people != undefined){
      if (people > 98){
        return ( <p>🚨Very busy.</p>);
      } 
    }
  }

  const suggestionAir = (iaq) => {
    if (iaq != undefined){
      if (iaq > 100){
        return (<p>🌀 Unhealthy, turn on the fans.</p>)
      }
    }
  }

  // suggestion(temperature);
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
        {suggestion(temperature)}
        {suggestionPeople(people)}
        {suggestionAir(iaq)}
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
