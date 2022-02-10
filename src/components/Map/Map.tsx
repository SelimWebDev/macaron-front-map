import "./Map.css";
import { useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { GeoJsonLayer } from "@deck.gl/layers";
import { FeatureCollection } from "../../type/FeatureCollection";

interface MapProps {
  arrondissements: FeatureCollection;
  tournages?: FeatureCollection;
}

function Map({ arrondissements, tournages }: MapProps) {
  const ReactMapGLToken = process.env.REACT_APP_MAP_TOKEN;
  const [viewport, setViewport] = useState({
    latitude: 48.856614,
    longitude: 2.3522219,
    zoom: 11,
  });

  // affichage de tout les arrondissements
  const arrondissementsLayer = new GeoJsonLayer({
    id: "allArrondissement",
    data: arrondissements,
    filled: false,
    getLineWidth: 100,
  });

  //affichge de tout les points
  const tournagesLayer = new GeoJsonLayer({
    id: "allTournages",
    data: tournages,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    pointType: "circle",
    getFillColor: [160, 160, 180, 200],
    getPointRadius: 100,
    pointRadiusScale: 1,
    pointRadiusMaxPixels: 20,
    pointRadiusMinPixels: 1,
  });

  return (
    <div data-testid="map" id="map">
      <DeckGL
        width="100%"
        height="90%"
        initialViewState={viewport}
        controller={true}
        layers={[arrondissementsLayer, tournagesLayer]}
      >
        <StaticMap mapboxApiAccessToken={ReactMapGLToken} />
      </DeckGL>
    </div>
  );
}

export default Map;
