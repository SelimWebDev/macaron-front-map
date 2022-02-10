import React from 'react';
import { render, screen } from '@testing-library/react';
import Map from './Map';

//exemple de donné pour le test
const arrondisssementTest = {
  type: "FeatureCollection",
  features: []
}

const tournageTest = {
  type: "FeatureCollection",
  features: []
}

test('component map', async () => {
  render(<Map arrondissements={arrondisssementTest} tournages={tournageTest}></Map>);
  const idMap = await screen.findByTestId('map');
  expect(idMap).toBeInTheDocument();
});
