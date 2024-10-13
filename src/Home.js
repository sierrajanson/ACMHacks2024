import React, { useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import api from './api.js';
import Popup from './Popup.js';
import './App.css'; // Optional: Add your styles here

const Home = () => {
  const mapDiv = useRef(null);
  const viewRef = useRef(null); // Use a ref to store the view instance
  const [selectedGraphic, setSelectedGraphic] = useState(null); // State to track the selected graphic
  const [temperature, setTemp] = useState(null);
  const [iaq, setIAQ] = useState(null);
  const [people, setPeople] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false); // New flag to track if data is loaded
  
  useEffect(() => {
    // Fetch data asynchronously
    const fetchData = async () => {
      try {
        const res = await api.get('/greetings');
        const obj = res.data.places.mchenry;

        setTemp(obj.temperature);
        setIAQ(obj.iaq);
        setPeople(obj.ble);

        setIsDataLoaded(true); // Set the flag when data is fully loaded
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Only run once when the component mounts

  useEffect(() => {
    // Initialize map only once
    if (viewRef.current || !isDataLoaded) return; // Prevent map initialization until data is loaded

    const initializeMap = async () => {
      const map = new WebMap({
        basemap: 'streets-navigation-vector',
      });

      const view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [-122.0575, 36.999],
        zoom: 15,
        ui: { components: ['zoom', 'compass'] },
        constraints: {
          attribution: false,
        },
      });

      const libraryLocations = [
        {
          name: 'McHenry Library',
          coordinates: [-122.0593, 36.9972],
          people: people || 'Loading...', // Use actual data once loaded
          temp: temperature || 'Loading...', // Actual data or placeholder
          IAQ: iaq || 'Loading...', // Actual data or placeholder
        },
        {
          name: 'Science & Engineering Library',
          coordinates: [-122.0624, 36.9991],
          people: 127,
          temp: 74,
          IAQ: 'good',
        },
        {
          name: 'Namaste Lounge',
          coordinates: [-122.0572, 37.0007],
          people: 28,
          temp: 64,
          IAQ: 'good',
        },
        {
          name: 'Rec Lounge',
          coordinates: [-122.0577, 37.0008],
          people: 18,
          temp: 79,
          IAQ: 'good',
        },

      ];
      
      libraryLocations.forEach((library) => {
        const point = new Point({
          longitude: library.coordinates[0],
          latitude: library.coordinates[1],
        });

        const graphic = new Graphic({
          geometry: point,
          symbol: {
            type: 'simple-marker',
            color: [226, 119, 40],
            outline: {
              color: [255, 255, 255],
              width: 1,
            },
          },
          attributes: {
            name: library.name,
            people: library.people,
            IAQ: library.IAQ,
            temp: library.temp,
          },
        });

        view.graphics.add(graphic);
      });

      // Add click event to the view to handle graphic selection
      view.on('click', (event) => {
        view.hitTest(event).then((response) => {
          if (response.results.length > 0) {
            const graphic = response.results[0].graphic;
            setSelectedGraphic(graphic); // Set the clicked graphic
          } else {
            setSelectedGraphic(null); // Clear selection if clicked outside
          }
        });
      });

      viewRef.current = view; // Store the view in the ref
    };

    initializeMap();

    return () => {
      if (viewRef.current) {
        viewRef.current.destroy();
        viewRef.current = null;
      }
    };
  }, [isDataLoaded]); // Only initialize the map when data is loaded

  return (
    <div className="appContainer">
      <div
        ref={mapDiv}
        style={{
          width: '70%',
          margin: 'auto',
          marginTop: '40px',
          marginBottom: '20px',
          height: '75%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          cursor: 'pointer',
        }}
      />
      {/* Render the Popup component if a graphic is selected */}
      {selectedGraphic && (
        <Popup
          name={selectedGraphic.attributes.name}
          people={selectedGraphic.attributes.people}
          iaq={selectedGraphic.attributes.IAQ}
          temperature={selectedGraphic.attributes.temp}
          onClose={() => setSelectedGraphic(null)} // Pass a prop to close the popup
        />
      )}
    </div>
  );
};

export default Home;

