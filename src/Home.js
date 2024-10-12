// import React, { useEffect, useRef } from 'react';
// import MapView from '@arcgis/core/views/MapView';
// import WebMap from '@arcgis/core/WebMap';
// import Graphic from '@arcgis/core/Graphic';
// import Point from '@arcgis/core/geometry/Point';
// import ReactDOM from 'react-dom/client';
// import Popup from './Popup.js';
// import api from './api.js';
// import { createRoot } from 'react-dom/client';  // Import createRoot

//     const fetchData = async() =>{
//       // const resp = await api.get('/',{
//       //   params: {query:description,apikey:"3e3c6e58-57bc-44f1-8883-68c50439beda<__>1PTsFeETU8N2v5f4qmtDZVGS"},
//       // });
//       const res = await api.get('/');
//       console.log(res);

//     }
//     fetchData();



import React, { useEffect, useRef, useState } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import api from './api.js';
import Popup from './Popup.js'; // Make sure to adjust the import based on your file structure
import './App.css'; // Optional: Add your styles here

const Home = () => {
  const mapDiv = useRef(null);
  const [selectedGraphic, setSelectedGraphic] = useState(null); // State to track the selected graphic

  useEffect(() => {
    let view;

    const initializeMap = async () => {
      const map = new WebMap({
        basemap: 'streets-navigation-vector',
      });

      view = new MapView({
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
          people: 9,
          temp: 87,
          IAQ: 'stale',
        },
        {
          name: 'Science & Engineering Library',
          coordinates: [-122.0624, 36.9991],
          people: 89,
          temp: 74,
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
    };

    initializeMap();

    const fetchData = async () => {
      const res = await api.get('/');
      console.log(res);
    };
    fetchData();

    return () => {
      if (view) {
        view.destroy();
        view = null;
      }
    };
  }, []);

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
          cursor:'pointer'
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
