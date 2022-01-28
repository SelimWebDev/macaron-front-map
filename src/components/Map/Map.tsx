import { useState } from 'react';
import DeckGL from '@deck.gl/react';
import './Map.css';
import { StaticMap } from 'react-map-gl';
//import { GeoJsonLayer } from '@deck.gl/layers';

function Map(props: any){
  const ReactMapGLToken = "pk.eyJ1Ijoic2VsaW13ZWJkZXYiLCJhIjoiY2t5d3p0c3J2MDAzcTJvcm4wODVlMzQzbCJ9.vK4tHxubO14oxdDKsPQRBw"
  const [viewport, setViewport] = useState({
    width: 1300,
    height: 800,
    latitude: 48.856614,
    longitude: 2.3522219,
    zoom: 8
  });

  /*const layer = new GeoJsonLayer ({
    id: 'allArrondissement',
    data: props.arrondissement,
  })*/

  return (
    <div data-testid="Map" id="Map">
        <DeckGL
          initialViewState={viewport}
          controller={true}
        >
          <StaticMap mapboxApiAccessToken={ReactMapGLToken} />
        </DeckGL>
    </div>
  );
}

export default Map;
