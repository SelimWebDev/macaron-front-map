import './Map.css';
import { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { StaticMap } from 'react-map-gl';
import {GeoJsonLayer} from '@deck.gl/layers';
import { FeatureCollection } from '../../type/FeatureCollection';

interface MapProps {
  arrondissements: FeatureCollection,
  tournages: FeatureCollection,
  tournagesSelected?: FeatureCollection
}

function Map({arrondissements, tournages, tournagesSelected}: MapProps){
  const ReactMapGLToken = "pk.eyJ1Ijoic2VsaW13ZWJkZXYiLCJhIjoiY2t5d3p0c3J2MDAzcTJvcm4wODVlMzQzbCJ9.vK4tHxubO14oxdDKsPQRBw"
  const [viewport, setViewport] = useState({
    latitude: 48.856614,
    longitude: 2.3522219,
    zoom: 8
  });

  const tournagesSelectedLayer = new GeoJsonLayer ({
    id: 'allTournages',
    data: tournagesSelected,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: 'circle',
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getPointRadius: 100,
    getLineWidth: 1,
    getElevation: 30
  })

  // affichage de tout les arrondissements
  const arrondissementsLayer = new GeoJsonLayer ({
    id: 'allArrondissement',
    data: arrondissements,
    filled: false,
    getLineWidth: 100
  })

  //affichge de tout les points
   const tournagesLayer = new GeoJsonLayer ({
    id: 'allTournages',
    data: tournages,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: 'circle',
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getPointRadius: 100,
    getLineWidth: 1,
    getElevation: 30
  })

  return (
    <div data-testid="map" id="map">
        <DeckGL
          width="100%"
          height="90%"
          initialViewState={viewport}
          controller={true}
          layers={[arrondissementsLayer, tournagesLayer, tournagesSelectedLayer]}
        >
          <StaticMap mapboxApiAccessToken={ReactMapGLToken} />
        </DeckGL>
    </div>
  );
}

export default Map;
