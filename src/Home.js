import React, { useEffect, useRef } from 'react';
import MapView from '@arcgis/core/views/MapView';
import WebMap from '@arcgis/core/WebMap';
import Graphic from '@arcgis/core/Graphic';
import Point from '@arcgis/core/geometry/Point';
import ReactDOM from 'react-dom/client';
import Popup from './Popup.js';

const Home = () => {
  const mapDiv = useRef(null);

  useEffect(() => {
    let view;

    const initializeMap = async () => {

      const map = new WebMap({
        basemap: 'streets-navigation-vector', 
      });

      view = new MapView({
        container: mapDiv.current,
        map: map,
        center: [-122.0575, 36.992], 
        zoom: 14,
        ui: { components: ["zoom", "compass"] },  
        constraints: {
          attribution: false  
        }
      });

      const libraryLocations = [
        {
          name: 'McHenry Library',
          coordinates: [-122.0593, 36.9972],
          people: 9,
          temp: 87,
          IAQ: "stale"
        },
        {
          name: 'Science & Engineering Library',
          coordinates: [-122.0624, 36.9991],
          people: 89,
          temp: 74,
          IAQ: "good"
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
          popupTemplate: {
            title: '{name}',
            content: 'There are {people} people, an IAQ of {IAQ}, and a temperature of {temp}',
          },
        });

        view.graphics.add(graphic);
      });
    };

    initializeMap();

    return () => {
      if (view) {
        view.destroy(); 
        view = null;
      }
    };
  }, []);

  return (
    <div>
      <div
        ref={mapDiv}
        style={{ width: '70%', margin:'auto', height: '600px', border: '1px solid black' }}
      />
    </div>
  );
};

export default Home;
