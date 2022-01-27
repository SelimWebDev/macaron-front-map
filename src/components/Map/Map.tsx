import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './Map.css';

function Map() {
  const [viewport, setViewport] = useState({
    width: 1300,
    height: 800,
    latitude: 48.856614,
    longitude: 2.3522219,
    zoom: 8
  });

  return (
    <div data-testid="Map" id="Map">
        <ReactMapGL
          {...viewport}
          onViewportChange={(nextViewport: typeof viewport) => setViewport(nextViewport)}
          mapboxApiAccessToken="pk.eyJ1Ijoic2VsaW13ZWJkZXYiLCJhIjoiY2t5d3p0c3J2MDAzcTJvcm4wODVlMzQzbCJ9.vK4tHxubO14oxdDKsPQRBw"
        />
    </div>
  );
}

export default Map;
